import { Route } from "@angular/router";
import { CaseDetails } from "~cases/features/feat-case-details/feat-case-details";
import { CaseList } from "~cases/features/feat-cases-list/feat-cases-list";
import { CaseLayout } from "~cases/layouts/cases-layout";

export const caseRoutes: Route[] = [
    {
        path: "cases",
        component: CaseLayout,
        children: [
            {
                path: "",
                component: CaseList,
                children: [
                    {
                        path: ":id",
                        component: CaseDetails
                    }
                ]
            }
        ]
    }
]