export type Nullable<T> = T | null | undefined;

export interface ICase {
    id: number | undefined;
    caseId: string | undefined;
    alias: string | undefined;
    title: string | undefined;
    description: string | undefined;
    caseNumber: number | undefined;
    status: string | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
};

export class Case implements ICase {
    id: number | undefined;
    caseId: string | undefined;
    alias: string | undefined;
    title: string | undefined;
    description: string | undefined;
    caseNumber: number | undefined;
    status: string | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}