import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-of-items',
    templateUrl: './list-of-items.component.html',
    styleUrls: ['./list-of-items.component.css'],
})
export class ListOfItemsComponent implements OnInit {

    public list = [
        '5 Spice Onion Soup.',
        'Barley Mushroom Soup.',
        'Cajun Kidney Bean Chili.',
        'Carrot Coconut Soup.',
        'Golden Squash Soup.',
        'Italian Navy Bean Soup with Rosemary.',
        'Minestrone Surprise.',
        'Oyster and Clam Chowder.',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}