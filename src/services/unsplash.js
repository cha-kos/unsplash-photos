import Unsplash from 'unsplash-js';
import { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: "64966a76b1417fc5f6f842f96c7d3290cf4242361dd1ee6ff681c8ef9ec377f5",
  secret: "0be9ea1101c31009e78078858e84c0dd3af718b36dd64fa1ca7ba3d3a1eacbf0",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

export const fetchPhotos = () => {
  return (
    unsplash.photos.listPhotos(2, 15, "latest")
    .then(toJson)
    .then(json => {
      return json;
    })
  );
};

export default unsplash;
