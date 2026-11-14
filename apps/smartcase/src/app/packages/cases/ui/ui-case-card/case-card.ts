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
        "[attr.aria-selected]": "selected()",
        "(click)": "onSelectCard($event)",
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

    public selected = model<boolean>(false);

    public selection = output<{ selected?: boolean, id: string }>();

    public onSelectCard(_: Event) {
        this.selection.emit({ id: this.id()! })
    }
}