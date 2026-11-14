import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { Tag } from "~ui";

@Component({
    selector: 'app-details-header',
    templateUrl: './details-header.html',
    imports: [
        CommonModule,
        Tag
    ]
})
export class DetailsHeader { 

    public title = input<string>();

    public caseNumber = input<number>();

}