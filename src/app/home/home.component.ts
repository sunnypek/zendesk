import { Component, OnInit } from "@angular/core";
import { Ticket } from "server/dist/model/ticket.model";
import { ZendeskService } from "src/app/services/zendesk.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private zendeskService: ZendeskService) {}
  displayedColumns: string[] = ["id", "subject", "priority", "status"];
  ticketArr: Ticket[] = [];
  ngOnInit(): void {
    this.zendeskService.getTickets().subscribe((arr) => (this.ticketArr = arr));
  }

  enterSingleTicket(clickTicket: Ticket) {
    console.log(clickTicket.url);
  }
}
