import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Movement } from '../models/movement';
import { QuantityTypeMovementDTO } from '../models/quantityTypeMovementDTO';
import { MoneyInvestbyAccountBankingDTO } from '../models/moneyInvestbyAccountBankingDTO';
import { MovementbyDateDTO } from '../models/movementbyDateDTO';


//importar de environment.ts
const base_url = enviroment.base

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private url = `${base_url}/movimientos`;
  private listaCambio = new Subject<Movement[]>();
  constructor(private httpClient: HttpClient) {}
  
  list() {
    return this.httpClient.get<Movement[]>(this.url);
  }

  insert(m: Movement) {
    return this.httpClient.post(this.url, m);
  }
  setList(listaNueva: Movement[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    return this.httpClient.get<Movement>(`${this.url}/${id}`);
  }
  update(c: Movement) {
    return this.httpClient.put(this.url, c);
  }

  eliminar(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  getCantidadDeMovimientoPorTipo(): Observable<QuantityTypeMovementDTO[]> {
    return this.httpClient.get<QuantityTypeMovementDTO[]>(
      `${this.url}/cantidadeMovimientoportipo`
    );
  }

  dineroInvertidoPorCuenta(): Observable<MoneyInvestbyAccountBankingDTO[]> {
    return this.httpClient.get<MoneyInvestbyAccountBankingDTO[]>(
      `${this.url}/sumaDineroInvertidoporNumeroCuenta`
    );
  }

  MovementbyDate(): Observable<MovementbyDateDTO[]> {
    return this.httpClient.get<MovementbyDateDTO[]>(
     ` ${this.url}/cantidadeMovimientoporFecha`
    );
  }
}

