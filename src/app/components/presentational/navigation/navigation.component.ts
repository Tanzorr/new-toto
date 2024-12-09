import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from '../../../services/storage/local-storage.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  isLoggedIn = true;
  loggedUserId!: User['id'];

  navLinks = [
    { label: 'Users', url: '/users', authRequired: false },
    { label: 'Vaults', url: '/vaults', authRequired: true },
    { label: 'About Us', url: '', authRequired: false },
    { label: 'Contacts', url: '', authRequired: false },
  ];
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.localStorageService.get('access_token');
    this.loggedUserId = +JSON.parse(<string>this.localStorageService?.get('logged_user')).id;
  }

  logout(): void {
    this.authService.logout();
  }

  mobileMenuToggle(): void {
    console.log('mobileMenuToggle');
    const nav = document.getElementById('navbarNav');
    nav?.classList.toggle('show');
  }
}
