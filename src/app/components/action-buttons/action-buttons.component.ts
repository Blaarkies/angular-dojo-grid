import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.css'],
})
export class ActionButtonsComponent implements OnInit {

    public list = [
        'face',
        'mail',
        '3d_rotation',
        'accessibility',
        'android',
        'build',
    ];

    //   'read',
    // 'unread',
    // 'forget',
    // 'remember',
    // 'delete',
    // 'undelete',

    constructor() {
    }

    ngOnInit() {
    }

}