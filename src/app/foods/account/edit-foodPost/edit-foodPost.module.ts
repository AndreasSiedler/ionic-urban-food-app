import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditFoodPostPage } from './edit-foodPost.page';

const routes: Routes = [
  {
    path: '',
    component: EditFoodPostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditFoodPostPage]
})
export class EditFoodPostPageModule {}