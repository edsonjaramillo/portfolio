import { RegisterOptions } from 'react-hook-form';

export const validationStandard: RegisterOptions = {
  required: { value: true, message: 'Required' },
};

export const validationEmail: RegisterOptions = {
  required: { value: true, message: 'Required' },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Invalid email address',
  },
};