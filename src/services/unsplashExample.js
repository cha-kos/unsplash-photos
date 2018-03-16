import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "{APP_ID}",
  secret: "{APP_SECRET}",
  callbackUrl: "{CALLBACK_URL}",
  bearerToken: "{USER_BEARER_TOKEN}"
});


// this is an example unsplash service configuration. In order to successfully
// run this locally you must create your own example app at the unsplash api website
// https://unsplash.com/developers

// then change this file name from unsplashExample.js to unsplash.js and you will then
// be able to successfully interact with the unsplash api!
