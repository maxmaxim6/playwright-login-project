export const users = {
  validUser: {
    email: "max@test.com",
    password: "1234"
  },

  wrongPassword: {
    email: "max@test.com",
    password: "wrong"
  },

  invalidEmail: {
    email: "max123",
    password: "1234"
  },

  emptyEmail: {
    email: "",
    password: "1234"
  },

  emptyPassword: {
    email: "max@test.com",
    password: ""
  }
};