import { CommonModule } from "@angular/common";
import { Component, input, model, output } from "@angular/core";
import { Tag } from "~ui";
import { NgpButton } from "ng-primitives/button";

export interface CaseProps {
    title: string;
    description: string;
    caseNumber: number;
    status: string;
}

@Component({
    selector: "app-case-card",
    templateUrl: "./case-card.html",
    imports: [
        CommonModule,
        Tag
    ],
    host: {
        role: "button",
        "[attr.aria-selected]": "isSelected()",
        "(click)": "handleClick()",
        "class": "group/item"
    },
    hostDirectives: [{ directive: NgpButton }]
})
export class CaseCard {

    public id = input<string | null>();

    public title = input<string | null>();

    public description = input<string | null>();

    public caseNumber = input<number | null>();

    public status = input<string | null>();

    public selected = output<string | undefined>();

    public isSelected = model<boolean>(false);

    public handleClick() {

        console.log("[Case] [UI] [Card] [Selected] > ", this.isSelected())

        this.onSelect(); this.selected.emit(this.id() || undefined);
    }

    private onSelect() {
        this.toggleSelect()
    }

    private toggleSelect(status?: boolean) {
        this.isSelected.set(status || !this.isSelected());
    }
}