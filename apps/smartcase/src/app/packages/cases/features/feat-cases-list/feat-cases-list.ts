import { CommonModule } from "@angular/common";
import { Component, inject, output } from "@angular/core";
import { Case } from "~cases/models/case.model";
import { CaseService } from "~cases/services/case.service";
import { CaseCard } from "~cases/ui/ui-case-card/case-card";
import { CaseContext } from "~cases/context/cases.context";
import { RouterModule } from "@angular/router";


@Component({
    selector: "app-case-list",
    templateUrl: "./feat-cases-list.html",
    imports: [
        CommonModule,
        CaseCard,
        RouterModule,
    ]
})
export class CaseList {

    public readonly caseService = inject(CaseService);
    public readonly caseContext = inject(CaseContext);

    public readonly chooseCase = output<string | null>();

    public cases = (this.caseService.getCases() as Promise<Case[]>);


}