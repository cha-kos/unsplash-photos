// ES Modules syntax
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "{APP_ID}",
  secret: "{APP_SECRET}",
  callbackUrl: "{CALLBACK_URL}"
});

window.unsplash = unsplash;

export default unsplash;
