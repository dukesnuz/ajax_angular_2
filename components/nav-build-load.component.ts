// nav bar accross top for build load component
import { Component } from '@angular/core';
import { NavBuildLoadService } from '../services/nav-build-load.service';

@Component({
    selector: 'nav-build-load',
    template: `
    {{message}}
            <ul>
                <li>
                    <button [ngClass]="{'active': hide === true}" type="submit" (click) = "navBuildLoad(1)" [disabled]= "hide" >{{hide ? "New Load Created": "Create New Load"}}</button>
                </li>
            </ul>
     <div *ngIf ="showBuildLoad">
            Show
       </div>
            `
    ,
    styles: ['.active {color: red}'],
    providers: [NavBuildLoadService]
})

export class NavBuildLoadComponent {

    postData: string;
    id: number;
    showBuildLoad: boolean;
    message: string;
    hide: boolean;

    constructor(private navBuildLoadService: NavBuildLoadService) {
        this.showBuildLoad = false;
        this.hide = false;
    }

    // build load creates new column with new id
    navBuildLoad(id: number) {
        this.navBuildLoadService.navBuildLoad(id)
            .subscribe(
            returned => {
                this.postData = JSON.stringify(returned);
                if (returned._body = "success") {
                    this.message = " ";
                    this.showBuildLoad = true;
                    this.hide = true;
                } else {
                    this.message = "Server Error";
                }
            },
            err => {
                this.message = "System Error";
                //console.log(err);
            },
            () => {
                //console.log('done');
            },
        );
    }
}
