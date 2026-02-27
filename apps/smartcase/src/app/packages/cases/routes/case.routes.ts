import { Route } from "@angular/router";
import { CaseList } from "~cases/features/feat-cases-list/feat-cases-list";

export const caseRoutes: Route[] = [
    {
        path: "cases",
        component: CaseList,
    }
]