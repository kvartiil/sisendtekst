import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'varav8',
  templateUrl: './varav8.component.html',
  styleUrls: ['./varav8.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class Varav8Component {
  currentIndex;

  sections = [
    {
      name: 'Efektiivsus',
      content: 'Content 1'
    },
    {
      name: 'Maksevõime',
      content: '<progn1-component></progn1-component>'
    },
    {
      name: 'Finantsvõimendus',
      content: ''
    },
    {
      name: 'Tasuvus',
      content: ''
    },
    {
      name: 'Tööjõu tootlikkus',
      content: ''
    }

  ];
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  showComponent4: boolean = false;
  showComponent5: boolean = false;

  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 3) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = true;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 4) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = true;
    }
  }

}