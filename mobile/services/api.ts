import axios from "axios";

const BASE = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8000";
const http = axios.create({ baseURL: BASE, timeout: 30000 });

export const api = {
  identify: (data: {
    imageBase64?: string;
    lat: number;
    lng: number;
    language: string;
    inputMethod: string;
    userId: string;
  }) => http.post("/identify/", data),

  converse: (data: {
    sessionId: string;
    userMessage: string;
    language: string;
  }) => http.post("/converse/", data),

  suggest: (data: {
    monumentId: string;
    language: string;
  }) => http.post("/suggest/", data),

  getCollection: (userId: string) =>
    http.get(`/collection/${userId}`),
};
