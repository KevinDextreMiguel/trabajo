import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EleminaraccountbankingComponent } from '../eleminaraccountbanking/eleminaraccountbanking.component';
import { ListaraccountbankingComponent } from '../listaraccountbanking.component';
import { Accountbanking } from '../../../../models/accountbanking';
import { AccountbankingService } from '../../../../services/accountbanking.service';

@Component({
  selector: 'app-verdetalleaccount',
  standalone: true,
  imports: [MatTableModule, MatIconModule,
    MatButtonModule, RouterModule,
    EleminaraccountbankingComponent,
    MatPaginatorModule,
    NgFor,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, ListaraccountbankingComponent],
  templateUrl: './verdetalleaccount.component.html',
  styleUrl: './verdetalleaccount.component.css'
})
export class VerdetalleaccountComponent implements OnInit {

  accountbanking: Accountbanking = new Accountbanking()


  id: number = 0

  constructor(
    private route: ActivatedRoute,
    private aS: AccountbankingService,
    public dialog: MatDialog,

  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];

    });
    this.aS.listId(this.id).subscribe((data) => {
      this.accountbanking = data
    });

  }
}
