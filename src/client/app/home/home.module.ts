import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { FilterByPipe } from './filter-pipe/filter.pipe';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, FilterByPipe],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }
