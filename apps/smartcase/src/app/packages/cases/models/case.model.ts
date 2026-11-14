export type CaseStatus = "Active" | "Pending" | "Closed";

export interface ICase {
    id              : number | null;
    caseId          : string | null;
    caseNumber      : number | undefined;
    alias           : string | undefined;
    title           : string | undefined;
    description     : string | undefined;
    status          : CaseStatus | null;
    createdAt       : Date | undefined;
    updatedAt       : Date | undefined;
};

export class Case implements ICase {
    id          : number | null = null;
    caseId      : string | null = null;
    caseNumber  : number | undefined;
    alias       : string | undefined;
    title       : string | undefined;
    description : string | undefined;
    status      : CaseStatus | null = null;
    createdAt   : Date | undefined;
    updatedAt   : Date | undefined;

}