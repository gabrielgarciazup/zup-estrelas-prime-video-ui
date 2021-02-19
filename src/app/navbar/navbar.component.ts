import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() keyUpEvent = new EventEmitter<string>();

  filteredVideosInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp() {
    this.keyUpEvent.emit(this.filteredVideosInput);
  }

}
