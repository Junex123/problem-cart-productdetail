import { Component, OnInit } from '@angular/core';

import { Router, RouterLink, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cartitem',
  standalone: true,
  imports: [RouterModule,RouterLink,CommonModule],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.scss'
})
export class CartitemComponent  {

  User: any;

  constructor(private router: Router) { }

  

  
  
  





}











