import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { NegTableModule, NegTableRegistryService } from '@neg/table';
import { NegTableTargetEventsModule } from '@neg/table/target-events';
import { NegTableDragModule } from '@neg/table/drag';

import { SharedModule, ExampleGroupRegistryService } from '@neg/apps/table/shared';
import { LayoutIntroductionTableExampleComponent } from './layout-introduction/layout-introduction.component';

const MATERIAL = [
  MatButtonToggleModule,
  MatFormFieldModule,
  MatDatepickerModule, MatNativeDateModule,
];

const DECLARATION = [
  LayoutIntroductionTableExampleComponent,
];

const ROUTES = [
  { path: 'introduction', component: LayoutIntroductionTableExampleComponent, data: { title: 'Introduction' } },
];

@NgModule({
  declarations: DECLARATION,
  imports: [
    RouterModule.forChild(ROUTES),
    MATERIAL,
    SharedModule,
    NegTableModule,
    NegTableTargetEventsModule,
    NegTableDragModule.withDefaultTemplates(),
  ],
  providers: [ NegTableRegistryService ],
})
export class LayoutConceptsModule {
  constructor(registry: ExampleGroupRegistryService) {
    registry.registerSubGroupRoutes('layout', ROUTES);
  }
}