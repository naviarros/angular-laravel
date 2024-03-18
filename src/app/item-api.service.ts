import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {
  private apiUrl = 'http://localhost:8000/api/items'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getItemById(id: number): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  addItem(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Item>(url, item);
  }

  updateItem(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Item>(url, item);
  }

  deleteItem(id: number): Observable<Item> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<Item>(url);
  }
}
