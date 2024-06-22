import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { VoucherService } from '../../../services/voucher.service';

@Component({
  selector: 'app-reportmontovoucherser',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportmontovoucherser.component.html',
  styleUrl: './reportmontovoucherser.component.css',
})
export class ReportmontovoucherserComponent  {
  barChartOptions: ChartOptions = {responsive: true,};

  barChartLabels: String[] = [];

  //barChartType: ChartType = 'pie';

  barChartType: ChartType = 'doughnut';

  //barChartType: ChartType = 'line';

 // barChartType: ChartType = 'bar';

  //barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[]=[];

  constructor(private sV: VoucherService) {}

  ngOnInit(): void {
    this.sV.getmontoVoucherser().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nameService);

      this.barChartData = [
        {
          data: data.map((item) => item.totalAmount),
          label: 'monto ',

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
