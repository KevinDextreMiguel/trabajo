import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { BankingentityService } from '../../../services/bankingentity.service';

@Component({
  selector: 'app-reportuserentity',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportuserentity.component.html',
  styleUrl: './reportuserentity.component.css'
})
export class ReportuserentityComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive:true,

  }

  barChartLabels: String[] = [];

  //barChartType: ChartType  = 'pie';

  barChartType: ChartType = 'doughnut';

  //barChartType: ChartType = 'line';

  //barChartType: ChartType = 'bar';

  //barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private sE:BankingentityService) {}

  ngOnInit(): void {
    this.sE.getuserEntity().subscribe((data) => {

      this.barChartLabels = data.map((item) => item.namebankingentity);

      this.barChartData = [

        {
          data: data.map((item) => item.quantityuser),
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
