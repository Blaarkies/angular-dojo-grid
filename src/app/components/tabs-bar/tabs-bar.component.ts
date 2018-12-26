import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabs-bar',
    templateUrl: './tabs-bar.component.html',
    styleUrls: ['./tabs-bar.component.css'],
})
export class TabsBarComponent implements OnInit {

    public list = [
        'Complete',
        'Not Complete',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}