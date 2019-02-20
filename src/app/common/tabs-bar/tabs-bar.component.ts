import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tabs-bar',
    templateUrl: './tabs-bar.component.html',
    styleUrls: ['./tabs-bar.component.scss', '../identification-layer-container.css'],
})
export class TabsBarComponent {

    @Input() responsive = false;

    public list = [
        'Complete',
        'Not Complete',
    ];


}