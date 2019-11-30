import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import {CreateAssetComponent} from './create-asset/create-asset.component';

const route:Routes = [
  {path:'', component:CreateAssetComponent}
]


@NgModule({
  declarations: [],
  imports: [
   
    CommonModule,

    RouterModule.forChild(route)

  ]
})
export class AssetsRoutingModule { }
