import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { DetailsHeader } from "./components/details-header/details-header";
import { DetailsContent } from "./components/details-content/details-content";
import { DetailsFooter } from "./components/details-footer/details-footer";

@Component({
    selector: 'app-case-details',
    templateUrl: './feat-case-details.html',
    imports: [
        CommonModule,
        DetailsHeader,
        DetailsContent,
        DetailsFooter
    ]
})
export class CaseDetails {
    public readonly id = input.required<string>();
}