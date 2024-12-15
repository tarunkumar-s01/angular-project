import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './layout/nav/nav.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { VegitarianComponent } from './vegitarian/vegitarian.component';
import { NonvegiteeComponent } from './nonvegitee/nonvegitee.component';
import { VisionComponent } from './vision/vision.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    
    {path:'nav',component:NavComponent},
    {path:'maindashboard',component:MaindashboardComponent,children:[
        {path:'data',component:DatabindingComponent},
        {path:'about',component:AboutComponent},
        {path:'home',component:HomepageComponent},
        {path:'veg',component:VegitarianComponent},
        {path:'nonveg',component:NonvegiteeComponent},
        {path:'vision',component:VisionComponent},
        {path:'contact',component:ContactusComponent},
        // {path:'product',component:ProductComponent,children:[
            
            
        // ]},
    ]}
];
