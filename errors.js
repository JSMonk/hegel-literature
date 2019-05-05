type User = {
  id: number,
  email: string
};

const NOT_FOUND = { status: 404, message: "User not found" };

function getByEmail(email: string): User {
  if (Math.random() > 0.5) {
    return { id: 1, email };
  }
  throw new Error("User is not presented in DB");
}

function signIn(email: string) {
  if (false) {
    throw 2;
  }
  return getByEmail(email);
}

function signInRoute(email) {
  try {
    return signIn(email);
  } catch (e) {
    if (e instanceof Error) {
      throw NOT_FOUND;
    }
    throw e;
  }
}
