import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    @ViewChild('sidenav') sidenav: ElementRef;
    sidenavOpen = false;

    constructor() { }

    ngOnInit() {
    }
}
