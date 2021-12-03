import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Ticket } from "server/dist/model/ticket.model";
import { ZendeskService } from "../services/zendesk.service";

@Component({
  selector: "app-single",
  templateUrl: "./single.component.html",
  styleUrls: ["./single.component.scss"],
})
export class SingleComponent implements OnInit {
  constructor(private zendeskService: ZendeskService, private route: ActivatedRoute) {}
  ticket!: Ticket;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.zendeskService.getTicket(params.id).subscribe((singleTicket) => {
        this.ticket = singleTicket;
        console.log(this.ticket);
      });
    });
  }
}
