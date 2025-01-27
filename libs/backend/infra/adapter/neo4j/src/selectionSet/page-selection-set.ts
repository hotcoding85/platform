import { exportStoreSelectionSet } from './store-selection-set'

export const basePageSelectionSet = `
  app {
    id
    name
    owner {
      auth0Id
    }
  }
  id
  name
  slug
  kind
  rootElement {
    id
    name
  }
  pageContentContainer {
    id
    name
  }
  urlPattern
`

export const pageSelectionSet = `
  ${basePageSelectionSet}
  store {
    id
  }
`

export const exportPageSelectionSet = `
  ${basePageSelectionSet}
  store {
     ${exportStoreSelectionSet}
  }
`
