import { Case } from "~domain/models/case/case.model";

/**
 * @author Dalndev
 * 
 * @description Domain/Repository. Interfaz (Contrato) que define la 
 * la interacción entre la aplicación y la información.
 */
export abstract class CaseRepository {
  abstract all(): Case[];
  abstract get(id: string): Case | undefined;
  abstract createCase(payload: Case): Case;
  abstract updateCase(id: string, payload: Case): Case;
  abstract deleteCase(id: string): Case;
}