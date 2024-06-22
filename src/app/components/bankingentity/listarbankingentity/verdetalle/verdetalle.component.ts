import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { BankingentityService } from '../../../../services/bankingentity.service';
import { Bankingentity } from '../../../../models/bankingentity';
import { MatDialog } from '@angular/material/dialog';
import { SinodeletebankingentityComponent } from '../sinodeletebankingentity/sinodeletebankingentity.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarbankingentityComponent } from '../listarbankingentity.component';


@Component({
  selector: 'app-verdetalle',
  standalone: true,
  imports: [
    MatTableModule, MatIconModule,
    MatButtonModule, RouterModule,
    SinodeletebankingentityComponent,
    MatPaginatorModule,
    NgFor,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule, ListarbankingentityComponent
  ],
  templateUrl: './verdetalle.component.html',
  styleUrl: './verdetalle.component.css'
})
export class VerdetalleComponent implements OnInit {

  bankingEntity: Bankingentity = new Bankingentity()


  id: number = 0

  constructor(
    private route: ActivatedRoute,
    private bS: BankingentityService,
    public dialog: MatDialog,

  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];

    });
    this.bS.listId(this.id).subscribe((data) => {
      this.bankingEntity = data
    });

  }
}
