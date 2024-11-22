import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vaults',
  templateUrl: './vaults.component.html',
  styleUrls: ['./vaults.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultsComponent {}
