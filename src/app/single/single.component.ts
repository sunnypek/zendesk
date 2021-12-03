import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Ticket } from "../models/ticket.model";
import { ZendeskService } from "../services/zendesk.service";

@Component({
  selector: "app-single",
  templateUrl: "./single.component.html",
  styleUrls: ["./single.component.scss"],
})
export class SingleComponent implements OnInit, AfterViewInit {
  constructor(private zendeskService: ZendeskService, private route: ActivatedRoute, private router: Router) {}
  ticket: Ticket = new Ticket("", "", "", "", "", "");
  id: string = "";

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  ngAfterViewInit(): void {
    this.zendeskService.getTicket(this.id).subscribe((singleTicket) => {
      this.ticket = singleTicket;
    });
  }

  backToHome(): void {
    this.router.navigate([""]);
  }
}
