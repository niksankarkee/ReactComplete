import axios from "axios";

const KEY = "AIzaSyApBMFfNcgo1p83fnNYovubjg_RFrmsAzs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
