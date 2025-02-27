import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"

export function generateCsrfToken() {
  const token = uuidv4()
  cookies().set("csrf-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  })
  return token
}

export function getCsrfToken() {
  return cookies().get("csrf-token")?.value
}

