import { create } from 'zustand'

export const useStore = create((set) => ({
  token: localStorage.getItem("accesToken") || null,
  login: (payload) => set(() => {
    localStorage.setItem("accesToken", payload)
    return {token: payload}
  }),
  logout: () => set(()=> {
    localStorage.removeItem("accesToken")
    return {token: null}
  })
}))
