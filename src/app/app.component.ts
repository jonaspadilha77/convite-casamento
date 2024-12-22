import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Renderer2, ElementRef, AfterViewInit, ViewChild, OnInit, HostListener } from '@angular/core';

declare let imageMapResize: any;
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
export class AppComponent implements OnInit, AfterViewInit{
  title = 'convite-casamento';
  inviteOpened: boolean = false;
  animationState = 'inactive';
  expandLetter = false;
  isFullScreen = false
  isLetterOverFlap = false


  @ViewChild('envelope', { static: true }) envelope: ElementRef;
  @ViewChild('letterFull', { static: true }) letterFull: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngAfterViewInit(): void {
    imageMapResize();
    this.renderer.listen(this.letterFull.nativeElement, 'transitionend', (event) => {
      if (event.propertyName === 'width' || event.propertyName === 'height') {
        this.checkLetterSize();
      }
    });
  }

  ngOnInit(): void {
    this.animationState = 'active';
  }

  checkLetterSize() {
    const div = this.letterFull.nativeElement;
    const isLetterFulscreen = div.offsetWidth === window.innerWidth && div.offsetHeight === window.innerHeight;
    if (isLetterFulscreen) {
      imageMapResize();
    }
  }
  openInvite() {
    this.inviteOpened = true
    this.handlePulseAnimation();

    setTimeout(() => {
      this.isLetterOverFlap = true;
    }, 200)

    setTimeout(() => {
      this.expandLetter = true;
      setTimeout(() => {
        this.isFullScreen = true;
      }, 2000);
    }, 1400);

  }

  handlePulseAnimation() {
    this.animationState = !this.inviteOpened ? 'active' : 'inactive';
  }
}
