import { Injectable } from "@angular/core";
import { CasesList } from "~cases/data/cases.data";

@Injectable({
    providedIn: "root"
})
export class CaseService { 

    public async getCases() {
        return new Promise((resolve) => resolve(CasesList));
    }
}