import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LayoutModule } from "@angular/cdk/layout";
import { MatTooltipModule } from "@angular/material/tooltip";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { ZendeskService } from "./services/zendesk.service";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SingleComponent } from "./single/single.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, HomeComponent, SingleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatTooltipModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  providers: [ZendeskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
