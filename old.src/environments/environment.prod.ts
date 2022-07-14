
const baseUrl = 'fl-ml-fraud.herokuapp.com'
const api_endpoint = `https://${baseUrl}`;
const websocket_api_endpoint = `wss://${baseUrl}`;
const cloudinary_endpoint = 'https://api.cloudinary.com/v1_1/<bucket-name>';
const cloudinary_preset = '';

export const environment = {
  production: true,
  api_endpoint,
  file_uplod_endpoint: `${cloudinary_endpoint}/upload/`,
  cloudinary_preset,
  graphql_endpoint: `${api_endpoint}/graphql/`,
  websocket_graphql_endpoint: `${websocket_api_endpoint}/graphql/`,
  recaptcha_site_key: '6LcCWfIUAAAAALvgSsvP9dKFqC1EtVtkj0IQBC5y',
};
