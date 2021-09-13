import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleAddComponent } from './article-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ArticleModule { }
