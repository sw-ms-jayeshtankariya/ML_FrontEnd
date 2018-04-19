import {Component }from '@angular/core'; 
import { Title } from '@angular/platform-browser';
import { slideInOutAnimation } from '../../_animations/slide-in-out.animations';

@Component( { 
templateUrl:'./settings.component.html', 
styleUrls:['./settings.component.css']
})
export class SettingsComponent {
    constructor(private titleService: Title) {
        this.setTitle("Settings");
    }
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
