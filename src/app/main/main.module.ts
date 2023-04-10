import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
