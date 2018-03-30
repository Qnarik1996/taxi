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
                    {{pageName}}
                    </div>
        </ion-navbar>
</ion-header>`,
styles:[
    `
    ion-navbar{
        height: 9vh;
        .toolbar-content-ios{
            align-items: center;
            display: flex;
        }
    }
    .bar-button-default-ios, .bar-button-default.bar-button-ios-default, .bar-button-clear-ios-default{
        font-size: 30px;
        color: #999;
       
    }
    .title-name{
        margin-left:10vh;
        font-size: 1.6em;
        
    }
    


    `
]

})
export class NewHeader{
@Input() pageName;
}

/*
ion-header{
        box-shadow:0 1px 12px rgba(0, 0, 0, 0.3);
    }*/ 