import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { SecondaryHeaderComponent } from './secondary-header/secondary-header.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { TaskBoardsComponent } from './task-boards/task-boards.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    ProfileComponent,
    SidebarNavComponent,
    ServicesComponent,
    SettingsComponent,
    AddProjectComponent,
    SecondaryHeaderComponent,
    FilterBarComponent,
    TaskBoardsComponent,
    TaskCardComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
