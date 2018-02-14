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
                    <div class="title-name">
                    <span>{{pageName}}</span>
                    </div>
        </ion-navbar>
</ion-header>`,
styles:[
    `
    ion-navbar{
        height: 9vh;
    }
    .bar-button-default-ios, .bar-button-default.bar-button-ios-default, .bar-button-clear-ios-default{
        font-size: 30px;
        color: #999;
       
    }
    .title-name{
        position: absolute;
        top: 0.4vh;
        left: 18vh;
        font-size: 1.6em;
        font-weight: bold;
    }


    `
]

})
export class NewHeader{
@Input() pageName;
}