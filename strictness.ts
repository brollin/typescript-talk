interface User {
  name: string;
  email?: string;
  phoneNumber?: string;
  nickname: string | null;
}

const me: User = {
  name: "Adam",
  email: "adam.victor@clever.com",
  nickname: null,
};

// With strictNullChecks enabled, we will get typecheck errors:
console.log(me.email.toUpperCase()); // Error: 'me.email' is possibly 'undefined'
console.log(me.phoneNumber.toUpperCase()); // Error: 'me.phoneNumber' is possibly 'undefined'
console.log(me.nickname.toUpperCase()); // Error: 'me.nickname' is possibly 'null'

// To fix these typecheck errors, we can perform type narrowing:
if (me.email) {
  console.log(me.email.toUpperCase());
}
if (me.phoneNumber !== undefined) {
  console.log(me.phoneNumber.toUpperCase());
}
if (typeof me.nickname === "string") {
  console.log(me.nickname.toUpperCase());
}
