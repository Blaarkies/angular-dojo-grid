import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-bar',
    templateUrl: './tabs-bar.component.html',
    styleUrls: ['./tabs-bar.component.css', '../identification-layer-container.css'],
})
export class TabsBarComponent {

    public list = [
        'Complete',
        'Not Complete',
    ];


}