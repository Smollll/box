import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: 'test.page.html',
  styleUrls: ['test.page.scss'],
})
export class TestPage implements OnDestroy {
  cardContent: number = this.generateRandomNumber();
  cardTwo: number = this.generateRandomNumber();
  cardThree: number = this.generateRandomNumber();
  private intervalId: any;
  public previousValue: number = this.cardContent;

  constructor(private sanitizer: DomSanitizer) {
    this.intervalId = setInterval(() => {
      this.updateCardContent();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateCardContent() {
    const newRandomValue = this.generateRandomNumber();
    setTimeout(() => {
      this.previousValue = this.cardContent;
      this.cardContent = newRandomValue;
      this.cardTwo = this.generateRandomNumber();
      this.cardThree = this.generateRandomNumber(); 
      console.log('Updated content:', this.cardContent);
      console.log('Previous value:', this.previousValue);
    });
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 9) + 1;
  }
}

