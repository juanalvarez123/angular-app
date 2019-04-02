import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ServerElementComponent } from './servers/server-element/server-element.component';
import { ServersComponent } from './servers/servers.component';
import { AlertComponent } from './alert/alert.component';
import { TestFormComponent } from './test-form/test-form.component';
import { LogComponent } from './log/log.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './servers/cockpit/cockpit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    ServerElementComponent,
    ServersComponent,
    AlertComponent,
    TestFormComponent,
    LogComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
