export type CaseStatus = 'Active' | 'Pending' | 'Closed';

/**
 * @author Dalndev
 * 
 * @description Domain/Model. Abstracción central del dominio del negocio, en donde
 * se representa con objetos y comportamientos.
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
