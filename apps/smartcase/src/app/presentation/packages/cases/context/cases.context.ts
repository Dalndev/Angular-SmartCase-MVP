import { signalStore, type } from "@ngrx/signals";
import { entityConfig, withEntities } from "@ngrx/signals/entities";

export type Case = {
    id: number;
    caseId: string;
    alias: string | undefined;
    title: string | undefined;
    description: string | undefined;
    caseNumber: number | undefined;
    status: string | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
};

const caseConfig = entityConfig({
    entity: type<Case>(),
    collection: 'case',
    selectId: (todo) => todo["id"],
});

export const CaseContext = signalStore(withEntities<Case>(caseConfig));