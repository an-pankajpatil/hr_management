import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-user',
  templateUrl: './invalid-user.page.html',
  styleUrls: ['./invalid-user.page.scss'],
})
export class InvalidUserPage implements OnInit, OnDestroy {
  timeout;
  constructor(private router:Router) {
  }
  ngOnInit() {
    this.timeout=setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 1000*5);
  }
  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
