import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { BreadCrumbs } from "../breadcrumbs";
import { CommonModule } from "@angular/common";

const meta: Meta<BreadCrumbs> = {
  title: 'Drafts/Breadcrumbs',
  component: BreadCrumbs,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BreadCrumbs
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<BreadCrumbs>;

export const breadcrumbs: Story = {
  render: () => ({
    template: ``
  })
}