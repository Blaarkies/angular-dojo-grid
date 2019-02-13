import { Component } from '@angular/core';

@Component({
    selector: 'app-extra-bar',
    templateUrl: './extra-bar.component.html',
    styleUrls: ['./extra-bar.component.css', '../identification-layer-container.css'],
})
export class ExtraBarComponent {

    public list = Array.from(Array(10).keys());

}