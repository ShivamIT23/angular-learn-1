// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from './currency-convertor.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CurrencyConvertorPipe,
    // CommonModule,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  title = "Don't F*ck with me";
  date = new Date();
  amount = 10;
}
