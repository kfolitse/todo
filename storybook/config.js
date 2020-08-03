import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import packageJson from '../package.json'

function loadStories() {
  require('../stories/index')
}
addDecorator(
  withOptions({
    name: 'Todo App with React',
    url: packageJson.repository.url,
    showAddonsPanel: false
  })
)
configure(loadStories, module)
