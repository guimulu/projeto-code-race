import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
@NgModule({
	declarations: [SearchComponent],
	imports: [IonicPageModule],
	exports: [SearchComponent]
})
export class ComponentsModule {}
