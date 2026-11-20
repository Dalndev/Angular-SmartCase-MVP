import { inject, Injectable, Provider } from '@angular/core';
import { CaseService } from '~infra/services/case/case.service';
import { Case } from '~domain/models/case/case.model';
import { CaseRepository } from '~domain/repositories/case/case.repository';

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


export default function provideCaseRepository(): Provider[] {
  return [{ provide: CaseRepository, useClass: ICaseRepository }]
}