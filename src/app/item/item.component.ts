import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { Item } from './item.model';
import { ItemApiService } from '../item-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemApiService: ItemApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getItems();
  }

  openAddModal(): void {
    const dialogRef = this.dialog.open(AddItemModalComponent);

    dialogRef.afterClosed().subscribe((result: Item) => {
      if (result) {
        this.addItem(result);
      }
    });
  }

  openEditModal(item: Item): void {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe((result: Item) => {
      if (result) {
        this.updateItem(result);
      }
    });
  }

  getItems(): void {
    this.itemApiService.getItems().subscribe(items => this.items = items);
  }

  addItem(item: Item): void {
    this.itemApiService.addItem(item).subscribe(() => this.getItems());
  }

  updateItem(item: Item): void {
    this.itemApiService.updateItem(item).subscribe(() => this.getItems());
  }

  deleteItem(id: number): void {
    this.itemApiService.deleteItem(id).subscribe(() => this.getItems());
  }
}
