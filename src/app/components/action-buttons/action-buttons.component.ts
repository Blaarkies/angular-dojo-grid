import { Component } from '@angular/core';

@Component({
    selector: 'app-action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.css', '../identification-layer-container.css'],
})
export class ActionButtonsComponent {

    public list = [
        'face',
        'mail',
        '3d_rotation',
        'accessibility',
        'android',
        'build',
    ];

}