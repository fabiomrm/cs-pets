import { User } from "../context/AuthContext";


const TOKEN_KEY = "token:dog-breed"

export function saveAuthData(obj: User) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(obj))
}

export function getAuthData(): User {
  const str = localStorage.getItem(TOKEN_KEY) ?? "{}"

  return JSON.parse(str);
}

export function removeAuthData() {
  localStorage.removeItem(TOKEN_KEY);
}