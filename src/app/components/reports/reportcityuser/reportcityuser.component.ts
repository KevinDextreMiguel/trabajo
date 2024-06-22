import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { UserService } from '../../../services/user.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reportcityuser',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportcityuser.component.html',
  styleUrl: './reportcityuser.component.css'
})
export class ReportcityuserComponent implements OnInit {
  barChartOptions:ChartOptions={ responsive:true,};

  barChartLabels: string[] = [];

  //barChartType: ChartType = 'pie';

  //barChartType: ChartType = 'doughnut';

  //barChartType: ChartType = 'line';

  barChartType: ChartType = 'bar';

//barChartType: ChartType = 'polarArea';

  barChartLegend=true
  barChartData:ChartDataset[]=[]

constructor(private uS:UserService){}
  ngOnInit(): void {
    this.uS.getQuantityCitybyUser().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.cityUser);
      this.barChartData = [
       {
        data: data.map((item) => item.quantity),
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
