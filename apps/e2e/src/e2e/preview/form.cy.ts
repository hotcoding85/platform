import type { Element } from '@codelab/shared/abstract/codegen'
import type { IAppDto, IPageDto } from '@codelab/shared/abstract/core'
import { IPageKind, IPageKindName } from '@codelab/shared/abstract/core'
import { findOrFail, slugify } from '@codelab/shared/utils'
import {
  elementForm,
  elementFormItem_1,
  elementFormItem_2,
  elementFormItem_3,
  elements,
} from './elements.data'
import {
  createApiPostActionData,
  createResourceData,
  resourceUrl,
} from './resource.data'

describe('Testing the Form atom', () => {
  let app: IAppDto
  let page: IPageDto

  before(() => {
    cy.postApiRequest<IAppDto>('/app/seed-cypress-app')
      .then(({ body }) => {
        app = body
        page = findOrFail(
          app.pages,
          (_page) => _page.kind === IPageKind.Provider,
        )

        cy.wrap(page).should('have.property', 'store')

        return cy.wrap(app)
      })
      .as('cypressApp')

    cy.get('@cypressApp').then(() =>
      cy
        .postApiRequest('/resource/create-resource', createResourceData)
        .as('cypressResource'),
    )

    cy.get('@cypressResource')
      .then(() =>
        cy.postApiRequest(
          '/action/create-action',
          createApiPostActionData(page),
        ),
      )
      .as('cypressAction')

    cy.get('@cypressResource').then(() =>
      cy
        .postApiRequest<Element>(
          `element/${page.id}/create-element`,
          elementForm(page),
        )
        .then(({ body }) => body)
        .as('formElement'),
    )

    cy.get<Element>('@formElement')
      .then((element) => {
        cy.log('Create element result', element)

        const elementFormId = element.id

        cy.postApiRequest(`element/${elementFormId}/create-elements`, elements)
      })
      .as('elements')

    cy.get('@elements').then(() =>
      cy.visit(
        `/apps/cypress/${slugify(app.name)}/pages/${slugify(
          IPageKindName.Provider,
        )}/builder`,
      ),
    )
  })

  it('should send the form data as request body in the API action', () => {
    cy.openPreview()

    cy.get(`#render-root #${elementFormItem_1.propsData?.name}`).should(
      'be.visible',
    )
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get(`#render-root #${elementFormItem_1.propsData?.name}`)
      .focus()
      .type('testing', { delay: 100 })
      .should('have.value', 'testing')

    cy.get(`#render-root #${elementFormItem_2.propsData?.name}`).click()
    cy.findByText('Select Option B').click()
    cy.get(`#render-root #${elementFormItem_3.propsData?.name}`).check()

    cy.intercept('POST', `${resourceUrl}/data`, { statusCode: 200 }).as(
      'submitData',
    )

    cy.get('#render-root button').first().click({ force: true })

    cy.get('@submitData').its('request.body').should('deep.equal', {
      checkboxField: true,
      inputField: 'testing',
      selectField: 'selectOptionB',
    })
  })
})
