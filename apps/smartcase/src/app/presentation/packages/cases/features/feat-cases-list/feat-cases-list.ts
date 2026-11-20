import { CommonModule } from "@angular/common";
import { Component, HostBinding, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { tv } from "tailwind-variants";
import { CaseRepository } from "@smartcase/domain/repositories";
import { Case } from "@smartcase/presentation/packages/cases/context";
import { CaseCard } from "@smartcase/presentation/packages/cases/ui";
import { CaseContext } from "@smartcase/presentation/packages/cases/context";

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
    public readonly router = inject(Router);

    public readonly caseContext = inject(CaseContext);
    public readonly caseRepository = inject(CaseRepository);

    public cases = (this.caseRepository.all());

    @HostBinding('class')
    get klass() {
        return classes();
    }

    public selection({ id }: { id: string }) {
        this.router.navigate(['/cases', id]);
    }
}