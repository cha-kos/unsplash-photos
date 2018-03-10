// ES Modules syntax
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "{APP_ID}",
  secret: "{APP_SECRET}",
  callbackUrl: "{CALLBACK_URL}"
});

export default unsplash;
