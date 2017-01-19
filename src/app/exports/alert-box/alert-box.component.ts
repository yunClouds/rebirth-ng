import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 're-alert-box',
  templateUrl: 'alert-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertBoxComponent {
  @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() canClose = true;
  @Output() close = new EventEmitter<any>();

  @Input()
  set disappearTime(time) {
    if (time) {
      setTimeout(() => this.onCloseBox(), time);
    }
  }

  closeBox() {
    this.onCloseBox();
  }

  private onCloseBox() {
    this.close.emit(this);
  }
}
