import { Route } from "@angular/router";
import { CaseDetails } from "@smartcase/presentation/packages/cases/features";
import { CaseManagement } from "@smartcase/presentation/packages/cases/pages";
import { CasePage } from "@smartcase/presentation/packages/cases/pages";

export const caseRoutes: Route[] = [
    {
        path: "cases",
        component: CasePage,
        children: [
            {
                path: ":id",
                component: CaseDetails,
            }
        ],
    },
    {
        path: "cases/edit/:id",
        component: CaseManagement
    }
]