import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ab372847b07b40cda11f2a09ed8ffdca",
  },
});
