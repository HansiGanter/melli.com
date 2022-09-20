import axios from 'axios'

export const useStripeAxios = axios.create({
  baseURL: import.meta.env.VITE_STRIPE_BACKEND_URL,
  headers: {
    Accept: 'application/json',
  },
})
