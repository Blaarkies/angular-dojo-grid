import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-extra-bar',
    templateUrl: './extra-bar.component.html',
    styleUrls: ['./extra-bar.component.scss', '../identification-layer-container.css'],
})
export class ExtraBarComponent {

    @Input() responsive = false;

    public list = Array.from(Array(10).keys());

}