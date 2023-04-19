import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  constructor() {}
  ngOnInit(): void {
    Keyboard.addListener('keyboardWillShow', () => {
      console.log(document.body.getBoundingClientRect());
    });
    Keyboard.addListener('keyboardDidShow', () => {
      console.log(document.body.getBoundingClientRect());
      if (document && document.activeElement) {
        console.log('1', document.activeElement);
        console.log('1', document.activeElement.getBoundingClientRect());
        setTimeout(() => {
          console.log('2', document.activeElement);
          console.log('2', document.activeElement!.getBoundingClientRect());
        }, 75);
      }
    });
  }
}
