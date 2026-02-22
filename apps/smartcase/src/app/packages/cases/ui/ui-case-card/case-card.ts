import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
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



}