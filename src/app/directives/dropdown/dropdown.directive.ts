import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @Input() appDropdown: HTMLElement;

  private firstTime = true;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() { }

  @HostListener('click') mouseclick(eventData: Event) {
    if (this.firstTime) {
      this.firstTime = false;
      this.renderer.addClass(this.appDropdown, 'show');
    } else {
      this.firstTime = true;
      this.renderer.removeClass(this.appDropdown, 'show');
    }
  }
}
