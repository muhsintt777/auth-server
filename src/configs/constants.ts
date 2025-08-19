export const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.{8,})(?=.*[A-Za-z])(?=.*\d).+$/,
  fullName: /^[\p{L}\s'-]+$/u,
} as const;
