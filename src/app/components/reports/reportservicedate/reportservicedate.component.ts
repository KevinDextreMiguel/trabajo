import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-reportservicedate',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportservicedate.component.html',
  styleUrl: './reportservicedate.component.css'
})
export class ReportservicedateComponent implements OnInit{
  barChartOptions: ChartOptions = {responsive:true,}

  barChartLabels: Date[] = [];

  barChartType: ChartType = 'pie';

 // barChartType: ChartType = 'doughnut';

  //barChartType: ChartType = 'line';

 //barChartType: ChartType = 'bar';

// barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[] = []

  constructor(private sSd: ServicesService) {}

  ngOnInit(): void {
    this.sSd.getquantitydate().subscribe((data) => {

      this.barChartLabels = data.map((item) => item.dateService);
      this.barChartData = [

        {
          data: data.map((item) => item.quantityDateService),
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
