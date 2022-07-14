export const pageSizeOptions = [
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: '200', value: 200 },
];

export const defaultPageSize = pageSizeOptions[0].value;

export class SearchParams {
  pageNumber: number = 1;
  pageSize: number = defaultPageSize;
  sortField?: string = null;
  sortOrder?: string = null;
  searchQuery: string = null;
  columnFilters: any = null;
}
export const secondInMillseconds = 60000;
export const minute = 60;
export const hour = minute * 60;
export const day = hour * 24;
export const week = day * 7;
export const month = week * 4;
export const year = month * 12;

export const dateFormat = 'YYYY-MM-DD';

export const localStorageKeys = {
  AUTH_TOKEN_KEY: 'AUTH_TOKEN',
  AUTH_REFRESH_TOKEN_KEY: 'AUTH_REFRESH_TOKEN',
  EXPIRATION_KEY: 'EXPIRES_AT',
  REMEMBER_ME_KEY: 'REMEMBER_ME',
};

export const defaultLogos = {
  institution: 'https://i.imgur.com/dPO1MlY.png',
  user: 'https://i.imgur.com/KHtECqa.png',
  group: 'https://i.imgur.com/hNdMk4c.png',
  chat: 'https://i.imgur.com/dr06PoW.png',
};

export const defaultSearchParams = new SearchParams();

export const USER_ROLES_NAMES = {
  SUPER_ADMIN: 'Super Admin',
  INSTITUTION_ADMIN: 'Institution Admin',
  CLASS_ADMIN: 'Class Admin',
  CLASS_ADMIN_LEARNER: 'Class Admin Learner',
  LEARNER: 'Learner',
};

export const ADMIN_SECTION_LABELS = {
  CLASS_ADMINS: 'Class Admins',
  INSTITUTIONS: 'Institutions',
  INSTITUTION_ADMINS: 'Institution Admins',
  LEARNERS: 'Learners',
  MEMBERS: 'Members',
  MODERATION: 'Moderation',
  USER_ROLES: 'User Roles',
};
