import { CommonModule } from "@angular/common";
import { Component, HostBinding, inject } from "@angular/core";
import { Case } from "~cases/models/case.model";
import { CaseService } from "~cases/services/case.service";
import { CaseCard } from "~cases/ui/ui-case-card/case-card";
import { CaseContext } from "~cases/context/cases.context";
import { Router, RouterModule } from "@angular/router";
import { tv } from "tailwind-variants";

const classes = tv({ base: 'w-max h-full flex-initial' });

export type CaseWithState = Case & { selected:boolean };

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
    public readonly router = inject(Router);

    public cases = (this.caseService.getCases() as Promise<CaseWithState[]>);

    @HostBinding('class')
    get klass() {
        return classes();
    }

    public selection({ id }: { id: string }) {
        this.router.navigate(['/cases', id]);
    }
}