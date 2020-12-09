import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'a',
        loadChildren: () => import('./a/a.module').then(m => m.MyAppAModule),
      },
      {
        path: 'b',
        loadChildren: () => import('./b/b.module').then(m => m.MyAppBModule),
      },
      {
        path: 'c',
        loadChildren: () => import('./c/c.module').then(m => m.MyAppCModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class MyAppEntityModule {}
