import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressEntry } from './address-entry'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // Observable for selected elements
  selectedElement = new BehaviorSubject<AddressEntry>(null);
  constructor() { }

  public selectionChanged(address: AddressEntry): void {
    this.selectedElement.next(address);
  }

}
