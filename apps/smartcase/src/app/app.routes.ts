import { Route } from '@angular/router';
import { caseRoutes } from "apps/smartcase/src/app/presentation/packages/cases/routes/case.routes";

export const appRoutes: Route[] = [
    ...caseRoutes
];
