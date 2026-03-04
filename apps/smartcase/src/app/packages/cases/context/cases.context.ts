import { ICase } from "~cases/models/case.model"
import { signalStore, withState } from "@ngrx/signals";

type CaseState = {
    cases: ICase[];
};

const initialState: CaseState = {
    cases: []
};

export const CaseContext = signalStore(withState(initialState));