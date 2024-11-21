import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Renderer2, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('pulseAnimation', [
      state('inactive', style({
        animation: 'none'
      })),
      state('active', style({
        animation: 'pulse 1s infinite'
      })),
      transition('inactive => active', animate('0s')),
      transition('active => inactive', animate('0s'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'convite-casamento';
  inviteOpened: boolean = false;
  @ViewChild('envelope', { static: true }) envelope: ElementRef;
  animationState = 'inactive';
  expandLetter = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.animationState = 'active';
  }
  openInvite() {
    this.inviteOpened = true
    this.handlePulseAnimation();


    setTimeout(() => {
      this.expandLetter = true;
    }, 1400);

  }

  handlePulseAnimation() {
    this.animationState = !this.inviteOpened ? 'active' : 'inactive';
  }
}
