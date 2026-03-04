export interface ICase {
    id: number | null;
    caseId: string | null;
    alias: string | null;
    title: string | null;
    description: string | null;
    caseNumber: number | null;
    status: string | null;
    createdAt: Date;
    updatedAt: Date;
};