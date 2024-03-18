import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {
  newItem: Item = new Item(0,'', '', false);

  constructor(public dialogRef: MatDialogRef<AddItemModalComponent>) {}

  onSave(): void {
    this.dialogRef.close(this.newItem);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
