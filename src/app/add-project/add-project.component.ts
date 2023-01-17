import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(value: any) {
    }
}
