import { createPassword } from "./denopass.ts";

console.clear();
console.log("Welcome to DenoPass");
const accountName = prompt(
  "Please enter the name of the account or domain for which you want to generate a password"
);

if (!accountName) {
  console.error("Account or domain name cannot be empty.");
  Deno.exit(1);
}

const accountPassword = createPassword(accountName);
console.log(`The password for ${accountName} is ${accountPassword}`);
