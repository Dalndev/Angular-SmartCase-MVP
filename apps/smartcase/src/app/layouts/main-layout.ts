import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-main-layout',
    template: `<ng-content/>`,
    imports: [CommonModule]
})
export class MainLayout { }