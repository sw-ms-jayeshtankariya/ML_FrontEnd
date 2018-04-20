import {Component }from '@angular/core'; 
import { Title } from '@angular/platform-browser';
import { slideInOutAnimation } from '../../_animations/slide-in-out.animations';

@Component( { 
templateUrl:'./404.component.html', 
styleUrls:['./404.component.css']
})
export class PageNotFoundComponent {
    constructor(private titleService: Title) {
        this.setTitle("404 Page not found");
    }
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
