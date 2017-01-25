import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template: TemplateRef<any>,
              private container: ViewContainerRef) {}

  @Input()
  set appIf(value:boolean) {
    if(value){
      this.container.createEmbeddedView(this.template)
    } else {
      this.container.clear();
    }
  };

}
