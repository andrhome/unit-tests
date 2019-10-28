import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LogClicksDirective } from './log-clicks.directive';

@Component({
  template: `<div appLogClicks (changes)="output = $event"></div>`
})
export class TestContainerComponent {
  public output: number;
}

describe('LogClicksDirective', () => {
  let container, fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestContainerComponent, LogClicksDirective]
    });

    fixture = TestBed.createComponent(TestContainerComponent);
    container = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new LogClicksDirective();
    expect(directive).toBeTruthy();
  });

  it('should log click', () => {
    const div = fixture.nativeElement.querySelector('div');
    div.click();
    expect(container.output).toBe(1);
  });
});
