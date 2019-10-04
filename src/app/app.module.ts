import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { PostsComponent } from './components/posts/posts.component';
import { appReducer } from './core/store/reducers/app.reducer';
import { PostsEffects } from './core/store/effects/posts.effect';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSortModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([PostsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
