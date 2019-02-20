import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss', '../identification-layer-container.css'],
})
export class SearchBarComponent {

    @Input() responsive = false;

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