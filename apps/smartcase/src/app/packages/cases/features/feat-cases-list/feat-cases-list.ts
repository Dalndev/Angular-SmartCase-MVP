import { CommonModule } from "@angular/common";
import { Component, HostBinding, inject } from "@angular/core";
import { tv } from "tailwind-variants";
import { ICase } from "~cases/models/case.model";
import { CaseService } from "~cases/services/case.service";
import { CaseCard } from "~cases/ui/ui-case-card/case-card";
import { CaseContext } from "~cases/context/cases.context";
import { RouterModule } from "@angular/router";

const classes = tv({
    base: 'w-max h-full flex-initial'
})

@Component({
    selector: "app-case-list",
    templateUrl: "./feat-cases-list.html",
    imports: [
        CommonModule,
        CaseCard,
        RouterModule
    ]
})
export class CaseList {

    public readonly caseService = inject(CaseService);
    public readonly caseContext = inject(CaseContext);

    public cases = (this.caseService.getCases() as Promise<ICase[]>);

    @HostBinding('class')
    get klass() {
        return classes();
    }
}