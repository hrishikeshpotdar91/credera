import { Component } from '@angular/core';
import { FormControl, Validators, EmailValidator, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  addACardForm;

  cards = [{
    date: 'SEPTEMBER 3,2014',
    title: 'Google Building Quantum Computing Processors',
    intro: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }]

  card = {
    date: '',
    title: '',
    intro: ''
  }

  locale = "en-us";

  createCard(card) {
    /* Formating Date As Per Card Format */

    let date = new Date(card.date);
    card.date = date.toLocaleString(this.locale, { month: "long" }) + " " + date.getDate() + "," + date.getFullYear();

    this.cards.push(card);
    this.decision = 'showOptions';
    this.card = {
      date: '',
      title: '',
      intro: ''
    }
  }

  constructor(private fb: FormBuilder) {
    this.addACardForm = fb.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      intro: ['', Validators.required]
    });
  }

  decision;

}
