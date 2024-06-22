import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../../models/user';
import { EliminaruserComponent } from './eliminaruser/eliminaruser.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listaruser',
  standalone: true,
  imports: [MatTableModule,
     EliminaruserComponent,
     MatButtonModule,
     MatFormFieldModule,
      RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    NgFor,
  ],
  templateUrl: './listaruser.component.html',
  styleUrl: './listaruser.component.css'
})


export class ListaruserComponent implements OnInit{
  datos: any[] = []; // Aquí almacenaremos los datos
  //definir las columnas de la tabla
  datosp: any[] = []
  tamanopagina: number = 2
  paginainicial: number = 0


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private uS: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.uS.list().subscribe((data) => {

      this.datos = data;
      this.datosp = this.datos.slice(0, this.tamanopagina)
    })

    this.uS.getList().subscribe((data) => {

      this.datos = data;
      this.datosp = this.datos.slice(0, this.tamanopagina)
    })
  }
  cambiarpagina(event: any) {
    this.paginainicial = event.pageIndex
    this.tamanopagina = event.pageSize
    const inicio = this.paginainicial * this.tamanopagina
    const final = inicio + this.tamanopagina
    this.datosp = this.datos.slice(inicio, final)
  }
  eliminaruser(id: number): void {
    this.dialog.open(EliminaruserComponent, { width: '250px' }).afterClosed().subscribe((res) => {
      if (res) {
        this.uS.eliminar(id).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        })
      }
    });
  }
}
