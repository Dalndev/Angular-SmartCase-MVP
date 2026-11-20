import { Injectable } from '@angular/core';
import { CasesList } from '@smartcase/data/index';
import { Case } from '@smartcase/domain/models';

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
