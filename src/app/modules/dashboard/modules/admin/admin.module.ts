import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

const declarations = [AdminDashboardComponent];
const imports = [SharedModule];

@NgModule({
  declarations,
  imports,
  exports: [...declarations, ...imports],
})
export class AdminModule {}
