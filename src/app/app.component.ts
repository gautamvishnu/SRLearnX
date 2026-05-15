import {
  Component,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
} from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";
import { CommonModule, isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        min-height: calc(100vh - 200px);
      }
    `,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "SRLearnX - Online Learning Platform";
  isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Any initialization logic
  }

  ngAfterViewInit() {
    // Any after view init logic
  }
}
