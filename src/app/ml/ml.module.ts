import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataPreparationComponent } from './data-preparation/data.preparation.component';
import { ModelsComponent } from './models/models.component';
import { UsersComponent } from './users/users.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TableSelectionComponent } from './data-preparation/table.selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {
    MatTabsModule, MatSidenavModule, MatCheckboxModule, MatDialogModule,
    MatFormFieldModule, MatButtonModule, MatCard, MatCardModule, MatStepperModule,
    MatToolbarModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import { SSnackBar } from '../_matProviders/mat.snack';
import { MLComponent } from './ml.component';
import { SharedModule } from '../shared/shared.module';
import { SaveUserComponent } from './users/user.save.component';
import { ConfirmationModalComponent } from '../shared/confirmationmodal.component';
import { SettingsComponent } from '../shared/settings/settings.component';
import { ReviewDataComponent } from './data-preparation/review-data/review-data.component';
import { CleanDataComponent } from './data-preparation/clean-data/clean-data.component';
import { PreparedDataComponent } from './data-preparation/prepared-data/prepared-data.component';
import { SalesInfoComponent } from './data-preparation/review-data/sales-info/sales-info.component';
import { DPSharedService } from './data-preparation/data.preparation.shared';
import { CommonModule } from '@angular/common';
import { MLRoutingModule } from './ml.routing.module';

@NgModule({
    entryComponents: [SalesInfoComponent, TableSelectionComponent, ConfirmationModalComponent],
    declarations: [
        ConfirmationModalComponent,
        MLComponent,
        DataPreparationComponent,
        ModelsComponent,
        UsersComponent,
        NotificationsComponent,
        TableSelectionComponent,
        SaveUserComponent,
        ReviewDataComponent,
        CleanDataComponent,
        PreparedDataComponent,
        SalesInfoComponent
    ],
    imports: [
        CommonModule,
        MLRoutingModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        DataTablesModule,
        MatTabsModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatStepperModule,
        MatToolbarModule,
        MatSelectModule,
        MatSnackBarModule,
        SharedModule
    ],
    providers: [SSnackBar, DPSharedService]
})
export class MLModule { }
