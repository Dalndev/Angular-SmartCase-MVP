import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
    selector: 'app-case-details',
    templateUrl: './feat-case-details.html',
    imports: [CommonModule]
})
export class CaseDetails {
    public readonly id = input.required<string>();
}