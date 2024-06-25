import { Routes } from '@angular/router';
import { AddCitationComponent } from './add-citation/add-citation.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    {path: "", component:IndexComponent},
    {path: "addcitation", component:AddCitationComponent}
];
