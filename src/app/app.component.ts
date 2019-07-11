import { Component, ViewChildren, ContentChildren, Input } from '@angular/core';

@Component({ selector: 'pane', template: `<div><ng-content></ng-content></div>` })
export class Pane {
  @Input() id !: string;
}

@Component({
  selector: 'tab',
  template: `
    <div>view children panes: <span *ngFor="let pane of viewChildrenPane?.toArray()">{{pane.id}} </span></div>
    <div>content children panes: <span *ngFor="let pane of contentChildrenPane?.toArray()">{{pane.id}} </span></div>

    <pane id="1">PANE#1</pane>
    <ng-content></ng-content>
    <pane id="4">PANE#4</pane>
    <pane id="5">PANE#5</pane>
  `
})
export class Tab {
  @ViewChildren(Pane) viewChildrenPane !: Pane;
  @ContentChildren(Pane) contentChildrenPane !: Pane;
}

@Component({
  selector: 'my-app',
  template: `
    <tab>
      <pane id="2">PANE#2</pane>
      <pane id="3">PANE#3</pane>
    </tab>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
