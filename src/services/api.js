import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

if (!BASE_URL) {
  console.warn('[api] REACT_APP_BACKEND_URL is not set. API calls will fail.');
}

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// ─── Response interceptor (normalize errors) ─────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contactApi = {
  submit: (data) => api.post('/contact', data),
};

// ─── Careers ──────────────────────────────────────────────────────────────────
export const careersApi = {
  apply: (data) => api.post('/careers/apply', data),
};

export default api;
