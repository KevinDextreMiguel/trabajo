import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { MovementService } from '../../../services/movement.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reportcounmovementtype',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportcounmovementtype.component.html',
  styleUrl: './reportcounmovementtype.component.css'
})
export class ReportcounmovementtypeComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  }

  barChartLabels: string[] = [];

  //barChartType: ChartType = 'pie';
  //barChartType: ChartType = 'doughnut';
  //barChartType: ChartType = 'line';
  barChartType: ChartType = 'bar';
 // barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(
    private mS: MovementService
  ) { }

  ngOnInit(): void {
    this.mS.getCantidadDeMovimientoPorTipo().subscribe((data) => {

      this.barChartLabels = data.map((item) => item.typemovement);

      this.barChartData = [

        {
          data: data.map((item) => item.countMovement),
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
