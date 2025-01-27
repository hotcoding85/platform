/* eslint-disable canonical/sort-keys */
import type { Tree } from '@nx/devkit'
import {
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nx/devkit'
import { addGraphqlEslintConfig } from './eslint/add-graphql-eslint-config'
import { addGraphqlExtension } from './lint/add-graphql-extension'
import { addCiLintConfig, removeCiLintConfig } from './lint/ci-lint-config'
import { addProjectTags } from './project-tags/add-project-tags'
import { updateTestConfig } from './test/project-json'
import { updateLibraryTsconfig } from './tsconfig/lib-tsconfig'

/**
 * Each project needs to output reporters to individual file, and we can't do that as CLI argument, so needs to be done at project level.
 *
 * We loop through each project and add the configurations there at a per-library basis.
 */
export const updateProjectConfig = (tree: Tree, projectName: string) => {
  const projectConfig = readProjectConfiguration(tree, projectName)

  console.log(`Checking for ${projectConfig.name}...`)

  /**
   * Modifies projectConfig here
   */
  // addCiLintConfig(tree, projectConfig)
  // removeCiLintConfig(tree, projectConfig)

  /**
   * Add the lint pattern to nx.json instead
   */
  // addGraphqlEslintConfig(tree, projectConfig)
  // addGraphqlExtension(tree, projectConfig)

  updateTestConfig(tree, projectConfig)
  addProjectTags(tree, projectConfig)
  updateLibraryTsconfig(tree, projectConfig)

  updateProjectConfiguration(tree, projectName, projectConfig)
}
