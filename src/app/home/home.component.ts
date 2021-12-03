import { Component, OnInit, ViewChild } from "@angular/core";
import { Ticket } from "../models/ticket.model";
import { ZendeskService } from "src/app/services/zendesk.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private zendeskService: ZendeskService, private router: Router) {}
  displayedColumns: string[] = ["id", "subject", "priority", "status"];
  dataSource = new MatTableDataSource<Ticket>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.zendeskService.getTickets().subscribe({
      next: (arr) => {
        this.dataSource = new MatTableDataSource<Ticket>(arr);
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  enterSingleTicket(clickTicket: Ticket) {
    this.router.navigate([clickTicket.id]);
  }
}
