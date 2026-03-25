import { CommonModule } from "@angular/common";
import { Component, input, model, output } from "@angular/core";
import { Tag } from "~ui";

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
    ]
})
export class CaseCard { 

    public id = input<string>();

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