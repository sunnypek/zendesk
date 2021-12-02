import { Component, OnInit } from "@angular/core";
import { ZendeskService } from "src/app/services/zendesk.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  private token: string = "";
  constructor(private zendeskService: ZendeskService) {}

  ngOnInit(): void {
    this.zendeskService.getToken().subscribe((response) => {
      console.log(response);
    });
  }
}
