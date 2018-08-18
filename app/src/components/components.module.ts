import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
	declarations: [SearchComponent,
    ProfileComponent],
	imports: [IonicPageModule],
	exports: [SearchComponent,
    ProfileComponent]
})
export class ComponentsModule {}
