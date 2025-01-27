import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from '../../../services/storage/local-storage.service';
import { User } from '../../../models/user';
import { UserRoles } from '../../../constans/user-roles';

interface NavLink {
  label: string;
  url: string;
  authRequired: boolean;
  isAdmin?: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  isLoggedIn = true;
  loggedUser!: User;

  navLinks: NavLink[] = [
    { label: 'Users', url: '/users', authRequired: false },
    { label: 'Vaults', url: '/vaults', authRequired: true },
    { label: 'About Us', url: '/pages/8', authRequired: false },
    { label: 'Contacts', url: '/pages/7', authRequired: false },
    { label: 'Pages', url: '/pages', authRequired: true, isAdmin: true },
  ];

  protected readonly UserRoles = UserRoles;
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.localStorageService.get('access_token');
    this.loggedUser = JSON.parse(<string>this.localStorageService?.get('logged_user'));
  }

  logout(): void {
    this.authService.logout();
  }

  mobileMenuToggle(): void {
    const nav = document.getElementById('navbarNav');
    nav?.classList.toggle('show');
  }
}
