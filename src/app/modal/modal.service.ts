import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  /*
  The modal service should make it possible to show some pre-defined modals very easily from any component.
  
  Only setup required should be to import the modal service in your component ts and run whatever you wish.
  */
  invokeshow = new EventEmitter();
  subsVar: Subscription | undefined;

  constructor() {
  }

  // Open a success modal
  success(title: string, body: string): ModalComponent | string[] {
    this.invokeshow.emit([title, body]);
    // Final implementation should always return !null
    return [title, body];
  }

  // Open a failure modal
  failure(title: string, body: string): ModalComponent | string[] {
    this.invokeshow.emit([title, body]);
    // Final implementation should always return !null
    return [title, body];
  }
}
