export type CaseStatus = 'Active' | 'Pending' | 'Closed';


/**
 * @description Abstracción del dominio central del negocio...
 */
export type Case = {
  id: number | null;
  caseId: string | null;
  caseNumber: number | undefined;
  alias: string | undefined;
  title: string | undefined;
  description: string | undefined;
  status: CaseStatus | null;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
};
