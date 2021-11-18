import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() wider = false;
  hidden = true;
  shown = false;



  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    if (this.modalService.subsVar==undefined) {
      this.modalService.subsVar=this.modalService.invokeshow.subscribe((name: string) => {        
        this.show(name);
      });
    }
  }

  show(text: string) {
    this.hidden = false;

    // Make sure slideover is translated away before expanding,
    // otherwise animation will not work.
    setTimeout(() => {
      this.shown = true;
      if (text != ''){
      var x = document.getElementById('title-custom');
      var y = document.getElementById('body-custom');
      if (x) {x.innerText=text[0]};
      if (y) {y.innerText=text[1]};
    }
    }, 1);
  }

  hide() {
    this.shown = false;
    setTimeout(() => {
      // Hide after the animation
      this.hidden = true;
    }, 200);
  }

  @HostListener('window:keydown.esc', ['$event'])
  escape(_e: KeyboardEvent) {
    if (this.shown) {
      this.hide();
    }
  }
}
