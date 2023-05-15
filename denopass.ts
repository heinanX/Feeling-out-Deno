import { passwordGenerator } from "https://deno.land/x/password_generator@latest/mod.ts";

export function createPassword(accountName: string): string {
  const passwordLength = accountName.length > 8  ? accountName.length : getRandomPasswordLength();
  return passwordGenerator("*", passwordLength);
}


export function getRandomPasswordLength(): number {
  const min = 5;
  const max = 15;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
