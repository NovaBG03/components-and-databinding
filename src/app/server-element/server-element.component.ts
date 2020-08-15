import {Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {name: string, type: string, content: string};
  @ContentChild('paragraphElement', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(`OnInit ContentChild: ${this.paragraph.nativeElement.textContent}`)
  }

  ngAfterContentInit() {
    console.log(`AfterContentInit ContentChild: ${this.paragraph.nativeElement.textContent}`)
  }
}
