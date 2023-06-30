import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomizerComponent } from '../customizer/customizer.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  constructor(
    public matDialog: MatDialog
  ) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.matDialog.open(CustomizerComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
