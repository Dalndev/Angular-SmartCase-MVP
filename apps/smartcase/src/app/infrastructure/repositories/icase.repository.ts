import { inject, Injectable, Provider } from '@angular/core';
import { CaseService } from '@smartcase/infra/services';
import { Case } from '@smartcase/domain/models';
import { CaseRepository } from '@smartcase/domain/repositories';

@Injectable({
  providedIn: 'root',
})
export class ICaseRepository implements CaseRepository {
  private readonly caseService = inject(CaseService);

  all(): Case[] {
    return this.caseService.all()
  }

  get(id: string): Case | undefined {
    return this.caseService.get(id);
  }

  createCase(payload: Case): Case {
    return this.caseService.createCase(payload);
  }

  updateCase(id: string, payload: Case): Case {
    return this.caseService.updateCase(id, payload);
  }
  
  deleteCase(id: string): Case {
    return this.caseService.deleteCase(id);
  }
}

/**
 * 
 * @description Provide pattern
 * 
 * @see {@link https://angular.dev/guide/di/defining-dependency-providers#the-provide-pattern | Angular Provide Pattern}
 */
export function provideCaseRepository(): Provider[] {
  return [{ provide: CaseRepository, useClass: ICaseRepository }]
}