import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./pages/index/index.component').then(m => m.IndexComponent)
    },
    {
        path: 'blogs',
        loadComponent: () => import('./pages/blogs/blogs.component').then(m => m.BlogsComponent)
    },
    {
        path: 'faq',
        loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
    }
];
