const config = {
  name: 'Website Speedy',
  entryPointUriPath: '${env:website-speedy-optimization}',
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  env: {
    development: {
      initialProjectKey: 'website-speedy-optimization',
    },
    production: {
      applicationId: '${env:cm2ry5jvs0003kpl9n1p3s0sd}',
      url: '${env:website-speedy-optimization}',
    },
  },
  oAuthScopes: {
    view: ['view_customers'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};
export default config;
