import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-extra-bar',
    templateUrl: './extra-bar.component.html',
    styleUrls: ['./extra-bar.component.css'],
})
export class ExtraBarComponent implements OnInit {

    public list = Array.from(Array(10).keys());

    constructor() {
    }

    ngOnInit() {
    }

}