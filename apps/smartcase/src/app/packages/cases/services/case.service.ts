import { Injectable } from "@angular/core";
import { CasesList } from "~cases/data/cases.data";
import { ICase } from "~cases/models/case.model";

@Injectable({
    providedIn: "root"
})
export class CaseService { 

    public async getCases(): Promise<ICase[]> {
        return new Promise((resolve) => resolve(CasesList));
    }

    public async getCaseById(id: string): Promise<ICase | undefined> {
        return new Promise((resolve) => {
            resolve(CasesList.find(({caseId}) => caseId === id))
        })
    }
}