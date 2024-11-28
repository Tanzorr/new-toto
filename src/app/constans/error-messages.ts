import { ErrorMessages } from '../models/error-message';

export const userErrorMessages: ErrorMessages = {
  name: {
    required: 'Name is required.',
    minlength: 'Name must be at least 2 characters long.',
  },
  email: {
    required: 'Email is required.',
    email: 'Please enter a valid email address.',
  },
  password: {
    required: 'Password is required.',
    minlength: 'Password must be at least 1 character long.',
  },
  password_confirmation: {
    required: 'Password confirmation is required.',
    minlength: 'Password confirmation must be at least 1 character long.',
  },
};

export const vaultErrorMessages: ErrorMessages = {
  name: {
    required: 'Name is required.',
    maxlength: 'Name must be at most 50 characters long.',
  },
  description: {
    maxlength: 'Description must be at most 255 characters long.',
  },
};

export const passwordErrorMessages: ErrorMessages = {
  name: {
    required: 'Name is required.',
    minlength: 'Name must be at least 12 characters long.',
  },
  value: {
    required: 'Value is required.',
    minlength: 'Value must be at least 12 characters long.',
  },
  description: {
    maxlength: 'Description must be at most 255 characters long.',
    minlength: 'Description must be at least 12 characters long.',
  },
};
