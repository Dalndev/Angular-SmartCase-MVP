import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Menu } from "../menu";
import { CommonModule } from "@angular/common";

const meta: Meta<Menu> = {
  title: 'Material Design/Menu',
  component: Menu,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Menu
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Menu>;

export const menu: Story = {
  render: () => ({
    template: ``
  })
}
