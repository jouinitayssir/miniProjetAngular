import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormateurComponent } from './formateur/formateur.component';
import { ParticipantComponent } from './participant/participant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent as addP} from './participant/add/add.component';
import { EditComponent as editP} from './participant/edit/edit.component';
const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'add', component: SessionAddFormComponent },
            {
                path: 'edit/:id', component:
                    SessionEditFormComponent
            },
            {
                path: 'list', component: SessionItemListComponent
            },
            {
                path: 'formateur',
                component: FormateurComponent
              },
              {
                path: 'dashboard',
                component: DashboardComponent
              },
              {
                path: 'participant',
                component: ParticipantComponent, children: [
                {
                    path:'add', component: addP 
                },
                {
                    path:'edit', component: editP 
                }
            
                ]
              },
              {
                path: 'session',
                component: SessionItemListComponent
              },

           
            { path: '', redirectTo: 'list', pathMatch: 'full' }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(adminRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [
        SessionItemComponent,
        SessionItemListComponent,
        SessionAddFormComponent,
        SessionEditFormComponent,
        AdminComponent,
        ParticipantComponent,
        addP,
        editP,
        ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }
