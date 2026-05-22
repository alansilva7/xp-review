// api.ts é só para confirgurar o axios para chamar a api

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});
