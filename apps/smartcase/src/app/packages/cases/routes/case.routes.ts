import { Route } from "@angular/router";
import { CaseDetails } from "~cases/features/feat-case-details/feat-case-details";
import { CasePage } from "~cases/pages/cases-page";

export const caseRoutes: Route[] = [
    {
        path: "cases",
        component: CasePage,
        children: [
            {
                path: ":id",
                component: CaseDetails
            }
        ]
    }
]