import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css', '../identification-layer-container.css'],
})
export class NavbarComponent {

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