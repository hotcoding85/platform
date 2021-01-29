import React, { useEffect, useState } from 'react'
import { AnyEventObject, EventObject, Sender, State } from 'xstate'
import { JsonSchemaForm } from './json-schema/JsonSchemaForm'
import {
  JsonSchemaFormEvent,
  JsonSchemaFormProps,
} from './json-schema/JsonSchemaForm.d'

export type GeneratedXStateFormProps<
  T extends object,
  TEvent extends AnyEventObject
> = Omit<JsonSchemaFormProps<T>, 'onSubmit' | 'formData' | 'onChange'> & {
  send: Sender<TEvent>
  createSubmitEvent: (submitEvent: JsonSchemaFormEvent<T>) => TEvent
  initialFormData?: T
  xStateOptions?:
    | {
        storeStateInXState: true
        createChangeEvent: (changeEvent: JsonSchemaFormEvent<T>) => TEvent
        state: State<any, TEvent, any>
        contextKey?: string
      }
    | {
        storeStateInXState: false
        createChangeEvent?: never
        state?: never
        contextKey?: never
      }
}

/**
 * {@see JsonSchemaForm} wrapper with XState integration, pass xStateOptions to configure how to store the form data in xState
 */
const XStateForm = <T extends object, TEvent extends EventObject>({
  send,
  createSubmitEvent,
  initialFormData,
  xStateOptions: {
    contextKey = 'formData',
    createChangeEvent,
    state,
    storeStateInXState,
  } = { storeStateInXState: false },
  ...props
}: GeneratedXStateFormProps<T, TEvent>) => {
  const onSubmit = (e: JsonSchemaFormEvent<T>) => {
    send(createSubmitEvent(e))
  }
  // The state is needed, because the rjsf doesn't keep any state. Every time this re-renders, the input values get lost
  // Use this as a backup state in case we don't provide one in the props
  const [localStateFormData, setStateFormData] = useState<T>(
    initialFormData as T,
  )

  let formData = localStateFormData
  let setFormData = ({ data }: JsonSchemaFormEvent<T>) => setStateFormData(data)

  if (storeStateInXState && state && createChangeEvent && contextKey) {
    formData = state.context[contextKey]
    setFormData = (e: JsonSchemaFormEvent<T>) => send(createChangeEvent(e))
  }

  useEffect(() => {
    // Update the form state with the initial state, in case we're using XState to manage it
    if (initialFormData) setFormData({ data: initialFormData })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <JsonSchemaForm<T>
      formData={formData}
      onChange={setFormData}
      onSubmit={onSubmit}
      {...props}
    />
  )
}

export default XStateForm