import { Component, OnInit } from '@angular/core';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserId, getUserName } from '../auth-blockstack/auth.selectors';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    userId$: Observable<string>;
    username$: Observable<string>;

    constructor(private store$: Store<AppState>) { }

    ngOnInit() {
        this.userId$ = this.store$.select(getUserId);
        this.username$ = this.store$.select(getUserName);
    }

}
