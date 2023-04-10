import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent, IconComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, CardComponent],
})
export class SharedModule {}
