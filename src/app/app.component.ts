import { Component } from '@angular/core';

interface Role {
    name: string,
    value: string
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'GifApp';
    roles: Role[];
    selectedRole: Role;
    constructor() {
        this.roles = [
            { name: 'Administrator', value: 'ADMIN' },
            { name: 'Sales', value: 'SALE' },
            { name: 'Marketing', value: 'MKT' },
            { name: 'HR', value: 'HR' },
            { name: 'Finance', value: 'FIN' },
        ]
        this.selectedRole = this.roles[0];
    }
}
