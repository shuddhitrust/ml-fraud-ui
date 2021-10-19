import { resources, RESOURCE_ACTIONS } from './models';

export const uiroutes = {
  ERROR_ROUTE: { route: 'error', auth: { resource: null, actions: [] } },
  HOME_ROUTE: { route: '', auth: { resource: null, actions: [] } },
  ABOUT_ROUTE: { route: 'about', auth: { resource: null, actions: [] } },
  CONTACT_ROUTE: { route: 'contact', auth: { resource: null, actions: [] } },
  ACTIVATE_ACCOUNT_ROUTE: {
    route: 'activate',
    auth: { resource: null, actions: [] },
  },
  REGISTER_ROUTE: {
    route: 'register',
    auth: { resource: null, actions: [] },
  },
  PASSWORD_RESET_ROUTE: {
    route: 'password-reset',
    auth: { resource: null, actions: [] },
  },
  RESEND_ACTIVATION_EMAIL_ROUTE: {
    route: 'resend-activatioin-email',
    auth: { resource: null, actions: [] },
  },
  DASHBOARD_ROUTE: {
    route: 'dashboard',
    auth: { resource: null, actions: [] },
  },
  PROFILE_ROUTE: { route: 'profile', auth: { resource: null, actions: [] } },
  ACCOUNT_ROUTE: { route: 'account', auth: { resource: null, actions: [] } },
  SUPPORT_ROUTE: { route: 'support', auth: { resource: null, actions: [] } },
  PRIVACY_ROUTE: { route: 'privacy', auth: { resource: null, actions: [] } },

  OWN_PROFILE_ROUTE: {
    route: 'my-profile',
    auth: { resource: resources.OWN_PROFILE, actions: [RESOURCE_ACTIONS.GET] },
  },
  MEMBER_PROFILE_ROUTE: {
    route: 'profile',
    auth: { resource: null, actions: [] },
  },
  MEMBER_FORM_ROUTE: {
    route: 'member-form',
    auth: {
      resource: resources.MEMBER,
      actions: [RESOURCE_ACTIONS.CREATE, RESOURCE_ACTIONS.UPDATE],
    },
  },
  USER_ROLE_PROFILE_ROUTE: {
    route: 'user-role-profile',
    auth: { resource: resources.USER_ROLE, actions: [RESOURCE_ACTIONS.GET] },
  },
  USER_ROLE_FORM_ROUTE: {
    route: 'user-role-form',
    auth: {
      resource: resources.USER_ROLE,
      actions: [RESOURCE_ACTIONS.CREATE, RESOURCE_ACTIONS.UPDATE],
    },
  },
};
