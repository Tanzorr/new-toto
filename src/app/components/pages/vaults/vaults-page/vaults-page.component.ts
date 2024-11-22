import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vaults-page',
  templateUrl: './vaults-page.component.html',
  styleUrls: ['./vaults-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultsPageComponent {}
