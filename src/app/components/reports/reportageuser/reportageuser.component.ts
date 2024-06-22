import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { UserService } from '../../../services/user.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reportageuser',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportageuser.component.html',
  styleUrl: './reportageuser.component.css'
})
export class ReportageuserComponent implements OnInit {
  barChartOptions:ChartOptions={responsive:true,};

  barChartLabels: number[] = [];

  //barChartType: ChartType = 'pie';
  barChartType: ChartType = 'doughnut';
  //barChartType: ChartType = 'line';
  //barChartType: ChartType = 'bar';
  //barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[]=[]

constructor( private uS:UserService){}
  ngOnInit(): void {
    this.uS.getQuantityAgebyUser().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.ageUser);
      this.barChartData = [
       {
        data: data.map((item) => item.quantityAge),
        label: 'Cantidad',
        backgroundColor: [
         '#0094d3',
         '#4169c7',
         '#0000CD',
         '#9BBB59',
         '#8064A2',
         '#4BACC6',
         '#4F81BC',
         '#C0504D',
        ],
        borderColor: 'rgba(173, 216, 230, 1)',
        borderWidth: 1,
       },
      ];
     });
  }
}

