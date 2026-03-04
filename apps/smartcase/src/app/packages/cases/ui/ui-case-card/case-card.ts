import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
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

    public title = input<string | null>();

    public description = input<string | null>();

    public caseNumber = input<number | null>();

    public status = input<string | null>();

}