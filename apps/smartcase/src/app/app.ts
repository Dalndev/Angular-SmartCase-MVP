import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { MainLayout } from '@smartcase/presentation/layouts';
import { NavigationRail, NavigationContent, NavigationFooter, NavigationHeader, NavigationItem, NavigationItemLabel, NavigationList, Navigation, NavigationPortal, Button, FAB } from '@smartcase/ui';
import { Header } from '@smartcase/shared/components';
import { matCreateOutline, matPersonOutline, matSettingsOutline, matWorkOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterModule, 
    CommonModule,
    MainLayout,
    Navigation,
    NavigationPortal,
    NavigationRail,
    NavigationHeader,
    NavigationContent,
    NavigationFooter,
    NavigationList,
    NavigationItem,
    NavigationItemLabel,
    NgIcon,
    Button,
    FAB,
    Header
  ],
  providers: [provideIcons({ matCreateOutline, matWorkOutline, matPersonOutline, matSettingsOutline })]
})
export class App { }
