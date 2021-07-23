import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    imports: [
        CommonModule
    ],

    declarations: [
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ]

})

export class ContadorModule {}