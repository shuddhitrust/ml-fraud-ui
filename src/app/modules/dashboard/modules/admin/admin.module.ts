import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { UserRoleModule } from './modules/user-role/user-role.module';

const declarations = [AdminDashboardComponent];
const imports = [SharedModule, UserRoleModule];

@NgModule({
  declarations,
  imports,
  exports: [...declarations, ...imports],
})
export class AdminModule {}
