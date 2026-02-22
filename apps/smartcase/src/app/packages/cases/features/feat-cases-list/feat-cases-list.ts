import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CaseCard } from "~cases/ui/ui-case-card/case-card";

@Component({
    selector: "app-case-list",
    templateUrl: "./feat-cases-list.html",
    imports: [
    CommonModule,
    CaseCard,
]
})
export class CaseList { 
    
}