import { Injectable } from "@angular/core";
import { Case } from "~domain/models/case/case.model";

@Injectable({
  providedIn: 'root'
})
export class CaseService { 

  all(): Case[] {
    throw new Error('Method not implemented.');
  }

  get(id: string): Case {
    throw new Error('Method not implemented.');
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