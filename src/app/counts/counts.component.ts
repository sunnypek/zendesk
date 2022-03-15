import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ZendeskService } from "../services/zendesk.service";

@Component({
  selector: "app-counts",
  templateUrl: "./counts.component.html",
  styleUrls: ["./counts.component.scss"],
})
export class CountsComponent implements OnInit {
  constructor(private zendeskService: ZendeskService, private router: Router) {}

  counts: number = 0;

  ngOnInit(): void {
    this.zendeskService.getTicketsCount().subscribe({
      next: (countObject) => {
        console.log(countObject);
        this.counts = countObject.value;
      },
    });
  }
}
