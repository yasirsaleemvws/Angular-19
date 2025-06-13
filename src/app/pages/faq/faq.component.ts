import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [NgIf, NgFor],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {
      question: 'Do you accept Paypal?',
      answer: 'Yes, we do, along with AliPay, PayTM, and Payoneer.',
      open: false
    },
    {
      question: 'What is your SLA Guarantee?',
      answer: 'We offer 99.9% uptime SLA for all our premium plans.',
      open: false
    },
    {
      question: 'Are there more Tailwind templates?',
      answer: 'Yes, we regularly add new templates to our collection.',
      open: false
    },
    {
      question: 'Is this template free for commercial use?',
      answer: 'Yes, all our templates are MIT licensed for commercial use.',
      open: false
    },
    {
      question: 'Is this template free for commercial use?',
      answer: 'Yes, all our templates are MIT licensed for commercial use.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
