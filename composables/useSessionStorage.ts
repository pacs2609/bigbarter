
export function getSessionItem(key: string) {
  // ✅ ตรวจสอบว่าเป็นฝั่ง Client ก่อนเสมอ
  if (import.meta.client) {
    try {
      return sessionStorage.getItem(key)
    } catch (e) {
      console.error(`Cannot read session storage for key ${key}`, e)
    }
  }
  return null
}

export function setSessionItem(key: string, value: string) {
  if (import.meta.client) {
    try {
      sessionStorage.setItem(key, value)
      return true
    } catch (e) {
      console.error(`Cannot set session storage for key ${key}`, e)
    }
  }
  return false
}