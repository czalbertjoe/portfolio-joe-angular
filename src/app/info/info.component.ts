import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements AfterViewInit {
  @ViewChild('modal1') modal1!: ElementRef;
  @ViewChild('modal2') modal2!: ElementRef;
  @ViewChild('modal3') modal3!: ElementRef;

  modal1Visible: boolean = false;
  modal2Visible: boolean = false;
  modal3Visible: boolean = false;

  ngAfterViewInit() {
    // Este método no se está utilizando actualmente, pero es necesario implementarlo
  }

  showModal(modal: string) {
    if (modal === 'modal1') {
      this.modal1Visible = true;  
    } else if (modal === 'modal2') {
      this.modal2Visible = true;
    } else if (modal === 'modal3') {
      this.modal3Visible = true;
    }
  }

  hideModal(modal: string) {
    if (modal === 'modal1') {
      this.modal1Visible = false;
    } else if (modal === 'modal2') {
      this.modal2Visible = false;
    } else if (modal === 'modal3') {
      this.modal3Visible = false;
    }
  }  
}
