import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss', '../identification-layer-container.css'],
})
export class NavbarComponent {

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