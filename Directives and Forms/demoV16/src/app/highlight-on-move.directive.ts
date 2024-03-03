import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit, OnDestroy {
  // (mouseover)="mouseOverHandler($event)" - same thing as below but we do not touch the html
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log(e);
  }

  constructor(private elRef: ElementRef, private render: Renderer2) {}

  unsubscribeFromEvents: (() => void)[] = [];

  ngOnInit(): void {
    console.log(this.elRef);
    // this.elRef.nativeElement.style.backgroundColor = 'yellow';

    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');

    this.unsubscribeFromEvents.push(
      this.render.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.mouseEnterHandler.bind(this)
      ),
      this.render.listen(
        this.elRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler.bind(this)
      )
    );
  }

  mouseEnterHandler(e: MouseEvent): void {
    console.log('enter', e);
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.render.addClass(this.elRef.nativeElement, 'highlight');
  }

  mouseLeaveHandler(e: MouseEvent): void {
    console.log('leave', e);
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    this.render.removeClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    this.unsubscribeFromEvents.forEach((fn) => fn());
  }
}
