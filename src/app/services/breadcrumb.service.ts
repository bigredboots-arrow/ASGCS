import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  private _filters$ = new BehaviorSubject<boolean>(false);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();
  readonly filter$ = this._filters$.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root, breadcrumbs);
        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, breadcrumbs: any[]) {
    if (route) {
      
      this._filters$.next(!!route.data.filter);

      if (route.data.breadcrumb) {
        const breadcrumb = {
          label: this.getLabel(route.data)
        };
        breadcrumbs.push(breadcrumb);
      }
      this.addBreadcrumb(route.firstChild, breadcrumbs);
    }
  }

  private getLabel(data: any) {
    return typeof data.breadcrumb === 'function'
      ? data.breadcrumb(data)
      : data.breadcrumb;
  }
}
