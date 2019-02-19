import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss', '../identification-layer-container.css'],
})
export class ActionButtonsComponent {

    @Input() responsive = false;

    public list = [
        'face',
        'mail',
        '3d_rotation',
        'accessibility',
        'android',
        'build',
    ];

}