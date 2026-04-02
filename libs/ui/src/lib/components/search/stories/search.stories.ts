import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Search } from "../search";
import { CommonModule } from "@angular/common";

const meta: Meta<Search> = {
  title: 'Drafts/Search',
  component: Search,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Search
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Search>;

export const search: Story = {
  render: () => ({
    template: ``
  })
}
