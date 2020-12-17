import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
 declarations: [AppComponent, PostListComponent],
 imports: [BrowserModule, HttpClientModule],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}