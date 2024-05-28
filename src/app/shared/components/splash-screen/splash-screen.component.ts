import { DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subject, delay, takeUntil } from 'rxjs';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
  standalone: true,
  imports: [NgIf]
})
export class SplashScreenComponent implements OnInit {
  show: boolean = true;
  destroy$ = new Subject();

  constructor(
    private _router: Router, 
    @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this._router.events.pipe(
      delay(1000),
      takeUntil(this.destroy$)
    ).subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.show = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.show = false;
          this.destroy$.next(null);
          this.destroy$.complete();
        }
      }
    )    
  } 
}
