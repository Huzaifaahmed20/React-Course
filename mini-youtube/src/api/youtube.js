import axios from "axios";
const KEY = "AIzaSyDqLFMSx1zeZ5wF_FuPVLZgQUlNfMQLIx4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
