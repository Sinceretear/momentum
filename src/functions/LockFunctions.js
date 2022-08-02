import axios from 'axios';

async function getBgFromUnsplashApi() {
    const clientId = "srjIZhO3VeCkUr-iRL13t3hDEwTw13fpnq4RXTRAJiA"
    const APIurl = 'https://api.unsplash.com/photos/random' + "?client_id=" + clientId;

    let config = {
      params: {
        orientation: 'squarish',
        query: 'travel'
      },
    }
      var BGisLocked = localStorage.getItem("locked");
      var locked = JSON.parse(BGisLocked) === true
      if (locked) {
        console.log("bg is locked")
      } else {
        console.log("bg is not locked")
      }

      return await axios.get(APIurl, config)
}

export default getBgFromUnsplashApi;