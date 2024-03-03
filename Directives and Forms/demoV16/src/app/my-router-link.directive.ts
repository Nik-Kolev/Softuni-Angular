import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink: string = '';
  constructor(
    private elRef: ElementRef,
    private render: Renderer2,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.render.listen(
      this.elRef.nativeElement,
      'click',
      this.clickHandler.bind(this)
    );
  }

  clickHandler(e: MouseEvent): void {
    console.log(this.appMyRouterLink);
    this.router.navigate([this.appMyRouterLink]);
  }
}
