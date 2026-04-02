import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Avatar } from "../avatar";
import { CommonModule } from "@angular/common";

const meta: Meta<Avatar> = {
  title: 'Drafts/Avatar',
  component: Avatar,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Avatar
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Avatar>;

export const avatar: Story = {
  render: () => ({
    template: ``
  })
}
