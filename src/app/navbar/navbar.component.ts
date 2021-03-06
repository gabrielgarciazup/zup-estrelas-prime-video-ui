import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../pages/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() keyUpEvent = new EventEmitter<string>();

  filteredVideosInput = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onKeyUp() {
    this.keyUpEvent.emit(this.filteredVideosInput);
  }

  onLogout() {
    this.authService.logout();
  }

}
