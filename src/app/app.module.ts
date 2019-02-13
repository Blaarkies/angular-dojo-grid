import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NormalTableComponent } from './components/grid/normal-table/normal-table.component';
import { CssGridTableComponent } from './components/grid/css-grid-table/css-grid-table.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { ActionButtonsComponent } from './common/action-buttons/action-buttons.component';
import { TabsBarComponent } from './common/tabs-bar/tabs-bar.component';
import { ExtraBarComponent } from './common/extra-bar/extra-bar.component';
import { ListOfItemsComponent } from './common/list-of-items/list-of-items.component';
import { BootstrapTableComponent } from './components/grid/bootstrap-table/bootstrap-table.component';
import { FlexTableComponent } from './components/grid/flex-table/flex-table.component';
import { TransitionAnimatedComponent } from './components/animations/1-transition-animated/transition-animated.component';
import { KeyframeAnimatedComponent } from './components/animations/2-keyframe-animated/keyframe-animated.component';
import { PracticalButtonComponent } from './components/animations/3-practical-button/practical-button.component';
import { ResponsiveLayoutComponent } from './components/responsive-layout/responsive-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { GridComponent } from './components/grid/grid.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'animations', component: AnimationsComponent},
    {path: 'grid', component: GridComponent},
    {path: 'responsive-layout', component: ResponsiveLayoutComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        FlexLayoutModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        AppComponent,
        NormalTableComponent,
        CssGridTableComponent,
        NavbarComponent,
        SearchBarComponent,
        ActionButtonsComponent,
        TabsBarComponent,
        ExtraBarComponent,
        ListOfItemsComponent,
        BootstrapTableComponent,
        FlexTableComponent,
        TransitionAnimatedComponent,
        KeyframeAnimatedComponent,
        PracticalButtonComponent,
        ResponsiveLayoutComponent,
        AnimationsComponent,
        HomeComponent,
        GridComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
