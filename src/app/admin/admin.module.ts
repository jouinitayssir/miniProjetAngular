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
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormateurComponent } from './formateur/formateur.component';
import { AddComponent as AddParticipantComponent } from './participant/add/add.component';
import { EditComponent as EditParticipantComponent } from './participant/edit/edit.component';

import { ParticipantComponent } from './participant/participant.component';
import { AddComponent as AddFormateurComponent } from './formateur/add/add.component';
import { EditComponent as EditFormateurComponent } from './formateur/edit/edit.component';
const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {   
                path: 'add', 
                component: SessionAddFormComponent 
            },
            {
                path: 'edit/:id', 
                component: SessionEditFormComponent
            },
            {
                path: 'list', component: SessionItemListComponent
            },
            { path: 'dashboard', component: DashboardComponent },
            
            { path: 'formateur', component: FormateurComponent},
            { path: 'add-formateur', component: AddFormateurComponent },
            { path: 'edit-formateur/:id', component: EditFormateurComponent },
            
            { path: 'participant', component: ParticipantComponent },
            { path: 'add-participant', component: AddParticipantComponent },
            { path: 'edit-participant/:id', component: EditParticipantComponent },

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
        AddParticipantComponent,
        EditParticipantComponent,
        AddFormateurComponent,
        EditFormateurComponent,
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }
