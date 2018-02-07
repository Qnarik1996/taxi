import {Component, Input} from '@angular/core';

@Component({
    selector:'new-header',
    template:`
    <ion-header>
        <ion-navbar>
                <div>
                        <button menuToggle ion-button icon-only>
                            <ion-icon md="md-menu" ios="md-menu"></ion-icon>
                        </button>
                    </div>
                    <ion-title>{{pageName}}</ion-title>
        </ion-navbar>
</ion-header>`,
styles:[
    `
    .bar-button-default-ios, .bar-button-default.bar-button-ios-default, .bar-button-clear-ios-default{
        background-color: white;
        color: #999;
    }
    `
]

})
export class NewHeader{
@Input() pageName;
}