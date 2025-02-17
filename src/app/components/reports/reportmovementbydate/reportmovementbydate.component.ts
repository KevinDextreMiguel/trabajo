import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { MovementService } from '../../../services/movement.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reportmovementbydate',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportmovementbydate.component.html',
  styleUrl: './reportmovementbydate.component.css'
})
export class ReportmovementbydateComponent implements OnInit{
barChartOptions: ChartOptions = {
  responsive: true,
};

barChartLabels: String[] = [];

//barChartType: ChartType = 'pie';

//barChartType: ChartType = 'doughnut';

// barChartType: ChartType = 'line';

//barChartType: ChartType = 'bar';

barChartType: ChartType = 'polarArea';

barChartLegend = true;
barChartData: ChartDataset[] = [];

constructor(private sV: MovementService) { }

ngOnInit(): void {
  this.sV.MovementbyDate().subscribe((data) => {
    this.barChartLabels = data.map((item) => item.dateMovement);

    this.barChartData = [
      {
        data: data.map((item) => item.quantityMovement),
        label: 'cantidad ',

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
