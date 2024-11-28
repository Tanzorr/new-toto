import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vault } from '../../../../models/vault';

@Component({
  selector: 'app-static-vaults-list',
  templateUrl: './static-vaults-list.component.html',
  styleUrls: ['./static-vaults-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticVaultsListComponent {
  @Input() vaults: Vault[] | undefined = [];
}
