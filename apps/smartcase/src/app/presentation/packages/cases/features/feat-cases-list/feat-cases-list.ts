import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { tv } from "tailwind-variants";
import { Case } from "@smartcase/domain/models";
import { CaseRepository } from "@smartcase/domain/repositories";
import { CaseCard } from "@smartcase/presentation/packages/cases/ui";
import { CaseContext } from "@smartcase/presentation/packages/cases/context";
import { FilterChip, Menu, MenuItem, Search } from "@smartcase/ui"
import { Chip } from "@smartcase/ui"
import { NgIcon, provideIcons } from "@ng-icons/core"
import { matFilterListOutline  } from "@ng-icons/material-icons/outline";

/**
 * @todo Maneja los overflows producidos en el contenido de la lista. [-webkit-scroll-(thumb/track/..)]
 */

const styles = tv({ base: 'w-max h-full flex-initial flex flex-col gap-[30px]' });

export type CaseWithState = Case & { selected:boolean };

@Component({
    selector: "app-case-list",
    templateUrl: "./feat-cases-list.html",
    imports: [
        CommonModule,
        CaseCard,
        RouterModule,
        Search,
        Chip,
        FilterChip,
        Menu,
        MenuItem,
        NgIcon
    ],
    providers: [
        provideIcons({ matFilterListOutline  })
    ],
    host: {
        '[class]': 'styles'
    }
})
export class CaseList {
    public readonly router = inject(Router);

    public readonly caseContext = inject(CaseContext);
    public readonly caseRepository = inject(CaseRepository);

    public cases = (this.caseRepository.all());

    get styles() {
        return styles();
    }

    public selection({ id }: { id: string }) {
        this.router.navigate(['/cases', id]);
    }
}