import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { ScrollArea } from "../scroll-area";

const meta: Meta<ScrollArea> = {
  title: "Material Desing/Scroll Area",
  component: ScrollArea,
  decorators: [
    moduleMetadata({
      imports: [ScrollArea]
    })
  ]
};

export default meta;

export type Story = StoryObj<ScrollArea>;

export const Default: Story = {
  render: () => ({
    template: `
      <ui-scroll-area>
        
      </ui-scroll-area>
    `
  })
}