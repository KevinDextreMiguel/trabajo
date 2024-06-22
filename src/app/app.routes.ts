
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { NavegarComponent } from './components/navegar/navegar.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { SobrenosotrosComponent } from './views/sobrenosotros/sobrenosotros.component';
import { LoginComponent } from './views/login/login.component';
import { RegistraruserComponent } from './components/user/registraruser/registraruser.component';
import { ListaruserComponent } from './components/user/listaruser/listaruser.component';
import { ListarservicesComponent } from './components/services/listarservices/listarservices.component';
import { ListarmovementComponent } from './components/movement/listarmovement/listarmovement.component';
import { ListarnotificationComponent } from './components/notification/listarnotification/listarnotification.component';
import { CrearnotificationComponent } from './components/notification/crearnotification/crearnotification.component';
import { ListarvoucherComponent } from './components/voucher/listarvoucher/listarvoucher.component';
import { CrearvoucherComponent } from './components/voucher/crearvoucher/crearvoucher.component';
import { ListarbankingentityComponent } from './components/bankingentity/listarbankingentity/listarbankingentity.component';
import { CrearbankingentityComponent } from './components/bankingentity/crearbankingentity/crearbankingentity.component';
import { ListaraccountbankingComponent } from './components/accountbanking/listaraccountbanking/listaraccountbanking.component';
import { CrearaccountbankingComponent } from './components/accountbanking/crearaccountbanking/crearaccountbanking.component';
import { ListartypeserviceComponent } from './components/typeservice/listartypeservice/listartypeservice.component';
import { CreartypeserviceComponent } from './components/typeservice/creartypeservice/creartypeservice.component';
import { ListarroleComponent } from './components/role/listarrole/listarrole.component';
import { CrearroleComponent } from './components/role/crearrole/crearrole.component';
import { CrearmovementComponent } from './components/movement/crearmovement/crearmovement.component';
import { CrearservicioComponent } from './components/services/crearservicio/crearservicio.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { TypeserviceComponent } from './components/typeservice/typeservice.component';
import { ServicesComponent } from './components/services/services.component';
import { RoleComponent } from './components/role/role.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MovementComponent } from './components/movement/movement.component';
import { Bankingentity } from './models/bankingentity';
import { Accountbanking } from './models/accountbanking';
import { VerdetalleComponent } from './components/bankingentity/listarbankingentity/verdetalle/verdetalle.component';
import { ContactoComponent } from './views/contacto/contacto.component';

import { ReportsComponent } from './components/reports/reports.component';
import { VerdetalleaccountComponent } from './components/accountbanking/listaraccountbanking/verdetalleaccount/verdetalleaccount.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },/*para que cargue el home de forma automàtica */
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'sobrenosotros', component: SobrenosotrosComponent },
    { path: 'contacto', component: ContactoComponent },

    { path: 'login', component: LoginComponent },
    { path: 'navegar', component: NavegarComponent },

    //components
    { path: 'user', component: UserComponent },
    { path: 'voucher', component: VoucherComponent },
    { path: 'typeservice', component: TypeserviceComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'rol', component: RoleComponent },
    { path: 'notificaction', component: NotificationComponent },
    { path: 'movement', component: MovementComponent },
    { path: 'bankingentity', component: Bankingentity },
    { path: 'accountbanking', component: Accountbanking },


    //user
    { path: 'registraruser', component: RegistraruserComponent },
    { path: 'listaruser', component: ListaruserComponent },
    { path: 'editaruser/:id', component: RegistraruserComponent },

//services
    { path: 'listarservicio', component: ListarservicesComponent },
    { path: 'crearservicio', component: CrearservicioComponent },
    { path: 'editarservicio/:id', component: CrearservicioComponent },
//movement
    { path: 'crearmovement', component: CrearmovementComponent },
    { path: 'listarmovement', component: ListarmovementComponent },
    { path: 'editarmovement/:id', component: CrearmovementComponent },
//notificaction
    { path: 'listarnotification', component: ListarnotificationComponent },
    { path: 'crearnotificacion', component: CrearnotificationComponent },
    { path: 'editarnotification/:id', component: CrearnotificationComponent },
//voucher
    { path: 'listarvoucher', component: ListarvoucherComponent },
    { path: 'crearvoucher', component: CrearvoucherComponent },
    { path: 'editarvoucher/:id', component: CrearvoucherComponent },
//banking entity
    { path: 'listarbankingentity', component: ListarbankingentityComponent },
    { path: 'crearbankingentity', component: CrearbankingentityComponent },
    { path: 'editarbankingentity/:id', component: CrearbankingentityComponent },
    { path: 'verdetallebanking/:id', component: VerdetalleComponent  },

//account banking
    { path: 'listaraccountbanking', component: ListaraccountbankingComponent },
    { path: 'crearaccountbanking', component: CrearaccountbankingComponent },
    { path: 'editaraccountbanking/:id', component: CrearaccountbankingComponent },
    { path: 'verdetalleaccount/:id', component: VerdetalleaccountComponent },

    //type service
    { path: 'listartypeservice', component: ListartypeserviceComponent },
    { path: 'creartypeservice', component: CreartypeserviceComponent },
    { path: 'editatypeservice/:id', component: CreartypeserviceComponent },
//role
    { path: 'listarrole', component: ListarroleComponent },
    { path: 'crearrole', component: CrearroleComponent },




    //reporte
    { path: 'reportes', component:ReportsComponent},
];
