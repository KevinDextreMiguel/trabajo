import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ReportcityuserComponent } from './reportcityuser/reportcityuser.component';
import { ReportageuserComponent } from './reportageuser/reportageuser.component';
import { ReportmontovoucherserComponent } from './reportmontovoucherser/reportmontovoucherser.component';
import { ReportservicedateComponent } from './reportservicedate/reportservicedate.component';
import { ReportservicenameComponent } from './reportservicename/reportservicename.component';
import { ReportnotificadateComponent } from './reportnotificadate/reportnotificadate.component';
import { ReporttipobankingComponent } from './reporttipobanking/reporttipobanking.component';
import { ReportuserentityComponent } from './reportuserentity/reportuserentity.component';
import { ReportcounmovementtypeComponent } from './reportcounmovementtype/reportcounmovementtype.component';
import { ReportmoneyinvestbyComponent } from './reportmoneyinvestby/reportmoneyinvestby.component';
import { ReportmovementbydateComponent } from './reportmovementbydate/reportmovementbydate.component';


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    ReportcityuserComponent,
    ReportageuserComponent,
    ReportmontovoucherserComponent,
    ReportservicedateComponent,
    ReportservicenameComponent,
    ReportnotificadateComponent,
    ReporttipobankingComponent,
    ReportuserentityComponent,
    ReportcounmovementtypeComponent,
  ReportmoneyinvestbyComponent,
ReportmovementbydateComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  constructor(public route:ActivatedRoute){}
   ngOnInit(): void {
   }
}
