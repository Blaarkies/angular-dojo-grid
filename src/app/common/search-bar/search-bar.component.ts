import { Component } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css', '../identification-layer-container.css'],
})
export class SearchBarComponent {

    public list = [
        'Inbox',
        'Starred',
        'Snoozed',
        'Important',
        'Sent',
        'Draft',
        'Spam',
    ];


}