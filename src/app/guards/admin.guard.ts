import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LocalStorageService } from '../services/storage/local-storage.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const storageService = inject(LocalStorageService);
  const loggedUser = JSON.parse(storageService.get('logged_user') || '{}');
  return loggedUser.role === 'admin';
};
