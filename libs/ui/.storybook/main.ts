import type { StorybookConfig } from '@storybook/angular';
import type { StorybookConfigVite } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';
import { type UserConfig } from 'vite';

//? Reference (Vite Builder). https://storybook.js.org/docs/builders/vite

const config: StorybookConfig & StorybookConfigVite = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  //* Vite Builder Config References.
  //* - https://github.com/storybookjs/storybook/issues/30734
  //* - https://norato-felipe.medium.com/configuring-storybook-with-angular-vite-esbuild-68c627ff9d71
  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/angular'
        ]
      },
      define: {
        STORYBOOK_ANGULAR_OPTIONS: JSON.stringify({
          enableIvy: true,
          strictInjectionParameters: true,
          strictTemplates: true,
          enableNgcc: true,
        }),
      },
    })
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
