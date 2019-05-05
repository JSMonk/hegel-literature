class User {}
class Chat {}
class Message {}

const models = { User, Chat, Message };

type Models = $TypeOf<models>;

function model<T: $Keys<Models>>(modelName: T): $PropertyType<Models, T> {
  return models[modelName];
}

// -------------------------------------------------------------------------

const UserModel = model("User");

const user: User = new UserModel();