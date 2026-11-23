import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { Avatar, AvatarGroup } from "../avatar";

const meta: Meta<Avatar> = {
  title: 'Material Design/Avatar',
  component: Avatar,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Avatar,
        AvatarGroup,
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Avatar>;

export const avatar: Story = {
  name: "Avatar",
  args: {},
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-avatar 
          url="https://unavatar.io/email/hello@microlink.io"
        />
        <ui-avatar 
          fallback="FB"
        />
      </div>
    `
  })
}

export const sizes: Story = {
  name: "Sizes",
  args: {},
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-avatar shape="rounded" size="sm" fallback="SM" />
        <ui-avatar shape="rounded" size="md" fallback="MD" />
        <ui-avatar shape="rounded" size="lg" fallback="LG" />
        </div>
    `
  })
}

export const group: Story = {
  name: "Group",
  args: {},
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-avatar-group [counter]="true">
          <ui-avatar fallback="SD"/>
          <ui-avatar fallback="DP"/>
          <ui-avatar fallback="PM"/>
        </ui-avatar-group>
      </div>
    `
  })
}
