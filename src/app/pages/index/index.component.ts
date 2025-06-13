import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  imports: [NgFor],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for performance with instant load times'
    },
    {
      icon: '🛡️',
      title: 'Secure',
      description: 'Enterprise-grade security to protect your data'
    },
    {
      icon: '🔄',
      title: 'Always Updated',
      description: 'Regular updates with new features'
    }
  ];

  testimonials = [
    {
      quote: "This product changed my workflow completely!",
      author: "Alex Johnson",
      role: "Product Manager"
    },
    {
      quote: "The best solution we've found for our needs.",
      author: "Sarah Williams",
      role: "CTO"
    }
  ];

}
