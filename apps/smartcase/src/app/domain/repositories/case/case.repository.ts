import { Case } from "~domain/models/case/case.model";

export abstract class CaseRepository {
  abstract all(): Case[];
  abstract get(id: string): Case;
  abstract createCase(payload: Case): Case;
  abstract updateCase(id: string, payload: Case): Case;
  abstract deleteCase(id: string): Case;
}