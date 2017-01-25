import {Directive, HostListener, HostBinding} from "@angular/core";

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  @HostBinding() title = 'false';

  @HostListener('mouseover')
  private mark() {
    this.title = 'true';
  }

  @HostListener('mouseout')
  private unmark() {
    this.title = 'false';
  }

}
