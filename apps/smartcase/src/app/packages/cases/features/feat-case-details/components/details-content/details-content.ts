import { Component, input } from "@angular/core";
import { Card, CardContent, CardHeader, CardTitle } from "~ui";
import { NgIcon, provideIcons } from "@ng-icons/core"
import { matInfoOutline } from "@ng-icons/material-icons/outline";

@Component({
    selector: 'app-details-content',
    templateUrl: './details-content.html',
    imports: [
        NgIcon,
        Card,
        CardContent,
        CardHeader,
        CardTitle
    ],
    providers: [
        provideIcons({ matInfoOutline })
    ]
})
export class DetailsContent { 

    public readonly description = input<string>();

}