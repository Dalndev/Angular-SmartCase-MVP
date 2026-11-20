import { Injectable } from '@angular/core';
import { Case } from '~domain/models/case/case.model';
import { CasesList } from '~data/cases/cases.data'

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  all(): Case[] {
    return CasesList;
  }

  get(id: string): Case | undefined {
    return CasesList.find(({ caseId }) => caseId === id)
  }

  createCase(payload: Case): Case {
    throw new Error('Method not implemented.');
  }

  updateCase(id: string, payload: Case): Case {
    throw new Error('Method not implemented.');
  }

  deleteCase(id: string): Case {
    throw new Error('Method not implemented.');
  }
}
