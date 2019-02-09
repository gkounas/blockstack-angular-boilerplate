import { Component, OnInit } from '@angular/core';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { RedirectToBlockstackSignIn } from '../auth-blockstack/auth.actions';
import { Observable } from 'rxjs';
import { isPending } from '../auth-blockstack/auth.selectors';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    pending$: Observable<boolean>;

    constructor(private store$: Store<AppState>) { }

    ngOnInit() {
        this.pending$ = this.store$.select(isPending);
    }

    goToBlockStackSignIn() {
        this.store$.dispatch(new RedirectToBlockstackSignIn());
    }
}
