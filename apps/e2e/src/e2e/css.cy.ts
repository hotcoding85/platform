import { CSS_AUTOSAVE_TIMEOUT } from '@codelab/frontend/abstract/domain'
import { NETWORK_IDLE_TIME } from '@codelab/frontend/test/cypress/shared'
import type { App } from '@codelab/shared/abstract/codegen'
import type { IAppDto } from '@codelab/shared/abstract/core'
import { IAtomType, IPageKindName } from '@codelab/shared/abstract/core'
import { ROOT_ELEMENT_NAME } from '@codelab/shared/config'
import { slugify } from '@codelab/shared/utils'

const ELEMENT_BUTTON = 'Button'
const backgroundColor1 = 'rgb(48, 182, 99)'
const backgroundColor2 = 'rgb(182, 99, 48)'
const displayNone = 'none'
const elementName = `Element ${ELEMENT_BUTTON}`

const createBackgroundColorStyle = (backgroundColorValue: string) =>
  `background-color: ${backgroundColorValue};`

const typeIntoEditor = (css: string) => {
  cy.get('[aria-label="format-painter"]').click()
  cy.waitForSpinners()

  cy.get('.cm-scroller [role="textbox"]').first().click()
  cy.get('.cm-scroller [role="textbox"]').first().clear()
  cy.get('.cm-scroller [role="textbox"]').first().type(css)
}

describe('CSS CRUD', () => {
  let app: IAppDto

  before(() => {
    cy.postApiRequest<App>('/app/seed-cypress-app').then(
      ({ body }) => (app = body),
    )
  })

  describe('Add css string', () => {
    it('should be able to add styling through css string', () => {
      cy.visit(
        `/apps/cypress/${slugify(app.name)}/pages/${slugify(
          IPageKindName.Provider,
        )}/builder`,
      )
      cy.waitForNetworkIdle(NETWORK_IDLE_TIME)
      cy.waitForSpinners()

      cy.createElementTree([
        {
          atom: IAtomType.AntDesignButton,
          name: elementName,
          parentElement: ROOT_ELEMENT_NAME,
        },
      ])

      typeIntoEditor(createBackgroundColorStyle(backgroundColor1))
      cy.waitForNetworkIdle(NETWORK_IDLE_TIME)

      cy.get('#render-root .ant-btn', { timeout: 30000 }).should(
        'have.css',
        'background-color',
        backgroundColor1,
      )
    })
  })

  describe('Update css string', () => {
    it('should be able to update styling through css string', () => {
      typeIntoEditor(createBackgroundColorStyle(backgroundColor2))
      cy.waitForNetworkIdle(NETWORK_IDLE_TIME)

      cy.get('#render-root .ant-btn', { timeout: 30000 }).should(
        'have.css',
        'background-color',
        backgroundColor2,
      )
    })
  })

  describe('Remove css string', () => {
    it('should be able to remove the css string', () => {
      typeIntoEditor(' ')
      cy.waitForNetworkIdle(NETWORK_IDLE_TIME)

      cy.get('#render-root .ant-btn', { timeout: 30000 }).should(
        'not.have.css',
        'background-color',
        backgroundColor1,
      )

      cy.get('#render-root .ant-btn', { timeout: 30000 }).should(
        'not.have.css',
        'background-color',
        backgroundColor2,
      )
    })
  })

  describe('Add GUI style', () => {
    it('should be able to add styling through GUI', () => {
      cy.get('[data-test-id="gui-display"] [title="None"]').click()
      // Wait for the auto-save debounce timeout
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(CSS_AUTOSAVE_TIMEOUT)
      cy.waitForNetworkIdle(NETWORK_IDLE_TIME)

      cy.get('#render-root .ant-btn', { timeout: 30000 }).should(
        'have.css',
        'display',
        displayNone,
      )
    })
  })

  describe('Css and GUI style persistance', () => {
    it('should persist styles after reload', () => {
      cy.reload()

      cy.waitForNetworkIdle(NETWORK_IDLE_TIME)
      cy.findByText(elementName).click()

      cy.get('#render-root .ant-btn', { timeout: 30000 }).should(
        'have.css',
        'display',
        displayNone,
      )
    })
  })
})
