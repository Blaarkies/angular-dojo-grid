import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NormalTableComponent } from './grid/normal-table/normal-table.component';
import { CssGridTableComponent } from './grid/css-grid-table/css-grid-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { TabsBarComponent } from './components/tabs-bar/tabs-bar.component';
import { ExtraBarComponent } from './components/extra-bar/extra-bar.component';
import { ListOfItemsComponent } from './components/list-of-items/list-of-items.component';
import { BootstrapTableComponent } from './grid/bootstrap-table/bootstrap-table.component';
import { FlexTableComponent } from './grid/flex-table/flex-table.component';
import { TransitionAnimatedComponent } from './animation/1-transition-animated/transition-animated.component';
import { KeyframeAnimatedComponent } from './animation/2-keyframe-animated/keyframe-animated.component';
import { PracticalButtonComponent } from './animation/3-practical-button/practical-button.component';

@NgModule({
    imports: [BrowserModule, FormsModule, FlexLayoutModule],
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
