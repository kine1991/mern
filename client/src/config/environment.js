/* eslint-disable no-undef */
const devUrl = 'http://localhost:5000';
const prodUrl =
  'http://carshopkron-env.iggr2karzq.us-east-2.elasticbeanstalk.com';
// export const url = devUrl;

let url;

// console.log('url', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  url = devUrl;
} else {
  url = prodUrl;
}

export default url;
