import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicObervablesComponent } from './topic-obervables/topic-obervables.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'obervables-page', component: TopicObervablesComponent},
    {path: 'template-forms', component: TemplateFormsComponent},
    {path: 'reactive-forms', component:ReactiveFormsComponent}
];
