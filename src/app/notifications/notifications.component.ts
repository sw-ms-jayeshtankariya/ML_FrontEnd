import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { slideInOutAnimation } from '../_animations/slide-in-out.animations';

@Component({
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
    title = 'app';
    constructor(private titleService: Title) {
        this.setTitle("Notifications");
    }
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
