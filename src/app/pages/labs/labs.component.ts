import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  gretting = 'Hola';

  tasks = signal([
    'install angular cli',
    'create project',
    'create components',
    'create service',
  ]);

  name = signal('Juan');
  age = 45;
  disabled = false;
  imgSrc = 'https://www.w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Juan',
    age: 45,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  clickHandler() {
    console.log('click');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  changeKeyHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
