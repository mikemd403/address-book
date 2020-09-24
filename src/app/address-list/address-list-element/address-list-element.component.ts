import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddressEntry } from '../address-entry';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-address-list-element',
  templateUrl: './address-list-element.component.html',
  styleUrls: ['./address-list-element.component.css']
})

export class AddressListElementComponent implements OnInit, OnDestroy {
  @Input() address: AddressEntry;
  selected = false;
  subscription: Subscription;

  constructor(private notificationService: NotificationService) { 
    this.subscription = notificationService.selectedElement.subscribe(newAddress => {
      this.selected = newAddress === this.address ? true : false;
    });
    this.selected = true;
  }

  ngOnInit(): void {
  }

  getFullName():string {
    return `${this.address.firstName}, ${this.address.lastName}`
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
