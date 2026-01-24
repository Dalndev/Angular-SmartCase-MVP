import { CommonModule } from "@angular/common";
import { moduleMetadata } from "@storybook/angular";
import type { Meta, StoryObj } from "@storybook/angular";
import { Button } from "./button"
import { NgpButton } from "ng-primitives/button";

const meta: Meta<Button> = {
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgpButton],
      declarations: [],
      providers: [],
    })
  ]
}

export default meta;

type ButtonStory = StoryObj<Button>;

export const button: ButtonStory = {
  render: () => ({
    template: `
      <smc-button/>
    `
  })
}