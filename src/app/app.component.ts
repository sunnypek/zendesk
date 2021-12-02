import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { OverlayContainer } from "@angular/cdk/overlay";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "zendesk";
  currTheme: string = localStorage.getItem("theme") ? <string>localStorage.getItem("theme") : "indigo-pink-theme";

  constructor(private overlayContainer: OverlayContainer, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.overlayContainer
      .getContainerElement()
      .classList.add(localStorage.getItem("theme") ? <string>localStorage.getItem("theme") : "indigo-pink-theme");
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  changeTheme(newTheme: string): void {
    let oldTheme: string = <string>localStorage.getItem("theme");
    this.currTheme = newTheme;
    localStorage.setItem("theme", newTheme);
    this.overlayContainer.getContainerElement().classList.remove(oldTheme);
    this.overlayContainer.getContainerElement().classList.add(newTheme);
  }
}
