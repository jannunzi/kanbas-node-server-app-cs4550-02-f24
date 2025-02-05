// import db from "../Database/index.js";
// let { users } = db;
import model from "./model.js";
export const createUser = (user) => {
  delete user._id;
  return model.create(user);
  // const newUser = { ...user, _id: Date.now() };
  // users = [...users, newUser];
  // return newUser;
};
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
// users.find((user) => user._id === userId);
export const findUserByUsername = (username) => model.findOne({ username }); //: username });
// users.find((user) => user.username === username);
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
// users.find(
//   (user) => user.username === username && user.password === password
// );
export const findUsersByRole = (role) => model.find({ role }); // or just model.find({ role })
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
// model.findByIdAndUpdate(userId, user, { new: true });
// (users = users.map((u) => (u._id === userId ? user : u)));
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
// (users = users.filter((u) => u._id !== userId));
