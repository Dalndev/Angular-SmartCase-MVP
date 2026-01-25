//@ts-ignore
import '../src/styles.css'
import { applicationConfig, Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    applicationConfig({
      providers: []
    })
  ]
}

export default preview;