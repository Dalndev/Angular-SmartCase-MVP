import { CommonModule } from "@angular/common";
import { Component, computed, inject, input } from "@angular/core";
import { CaseRepository } from "@smartcase/domain/repositories";
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

    private readonly caseService = inject(CaseRepository);

    public readonly id = input.required<string>();

    public case = computed(() => this.caseService.get(this.id()));
}