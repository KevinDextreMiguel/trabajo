import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { NotificationService } from '../../../services/notification.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reportnotificadate',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportnotificadate.component.html',
  styleUrl: './reportnotificadate.component.css'
})
export class ReportnotificadateComponent implements OnInit{
  barChartOptions: ChartOptions = {responsive : true,};

  barChartLabels: Date[] = [];

  //barChartType: ChartType = 'pie';
  //barChartType: ChartType = 'doughnut';
  //barChartType: ChartType = 'line';
  barChartType: ChartType = 'bar';
 // barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData:  ChartDataset[] = []

  constructor(private sN: NotificationService) {}

  ngOnInit(): void {
    this.sN.getnotificationdate().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.dateNotification);
      this.barChartData = [
        {
          data: data.map((item) => item.quantityNotification),
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
