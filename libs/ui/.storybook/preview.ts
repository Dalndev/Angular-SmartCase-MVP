//@ts-ignore
import '../src/styles.css'
import { applicationConfig, Preview } from '@storybook/angular';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: []
    })
  ]
}

export default preview;