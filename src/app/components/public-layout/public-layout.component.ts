import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-public-layout",
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./public-layout.component.html",
  styles: ``,
})
export class PublicLayoutComponent {}
