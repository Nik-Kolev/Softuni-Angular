import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  Optional,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpProp: any;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log('-------------------');
    console.log('templateRef', this.templateRef);
    console.log('myTmpProp', this.myTmpProp);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appMyStructural);

    if (this.templateRef === undefined) {
      return;
    }

    const template = this.templateRef || this.myTmpProp;
    if (!template) {
      return;
    }

    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(template, {
        value: 'Value from ngOnChanges',
        $implicit: 'this is implicit data',
      });
    } else {
      this.vcRef.clear();
    }
  }
}
