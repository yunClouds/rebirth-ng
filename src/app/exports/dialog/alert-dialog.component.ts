import { Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Modal, ModalDismissReasons } from '../modal';
import { DialogOptions } from './dialog-options.model';
import { RebirthNGConfig } from '../rebirth-ng.config';

@Component({
  selector: 're-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertDialogComponent implements Modal {
  context: DialogOptions;
  dismiss: EventEmitter<any>;
  btnYes: string;

  constructor(private rebirthUIConfig: RebirthNGConfig) {
    this.btnYes = rebirthUIConfig.dialog.button.yes;
  }

  yes() {
    this.dismiss.emit(ModalDismissReasons.YES);
  }

  no() {
    this.dismiss.error(ModalDismissReasons.NO);
  }
}
