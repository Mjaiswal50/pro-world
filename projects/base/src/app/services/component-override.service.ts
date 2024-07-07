// projects/base/src/app/services/component-override.service.ts
import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface ComponentOverrideConfig {
    [key: string]: string;
}

@Injectable({
    providedIn: 'root',
})
export class ComponentOverrideService {
    private componentMap: Map<string, Type<any>> = new Map();

    constructor(private http: HttpClient) { }

    loadConfig(): Observable<void> {
        return this.http.get<ComponentOverrideConfig>('assets/component-overrides.json').pipe(
            map((config) => {
                for (const selector in config) {
                    if (config.hasOwnProperty(selector)) {
                        const componentPath = config[selector];
                        if (componentPath.includes('homepage')) {
                            import('../../extension/homepage/homepage.component').then((m) => {
                                this.componentMap.set(selector, m.HomepageComponent);
                            });
                        }
                    }
                }
            }),
            catchError(() => of(void 0))
        );
    }

    getComponent(selector: string): Type<any> | null {
        return this.componentMap.get(selector) || null;
    }
}
