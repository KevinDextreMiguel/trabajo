import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { AccountbankingService } from '../../../services/accountbanking.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reporttipobanking',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reporttipobanking.component.html',
  styleUrl: './reporttipobanking.component.css'
})
export class ReporttipobankingComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive:true,

  }

  barChartLabels: String[] = [];

  barChartType: ChartType  = 'pie';

  //barChartType: ChartType = 'doughnut';

  //barChartType: ChartType = 'line';

  //barChartType: ChartType = 'bar';

  //barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private sV:AccountbankingService) {}

  ngOnInit(): void {
    this.sV.getuserbanking().subscribe((data) => {

      this.barChartLabels = data.map((item) => item.typeAccountBanking);

      this.barChartData = [

        {
          data: data.map((item) => item.quantityAccountBanking),
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
