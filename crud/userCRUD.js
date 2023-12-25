const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const yargs = require('yargs');

const argv = yargs(process.argv.slice(2)).argv;
const usersFile = 'users.json';

const loadUsers = () => {
  try {
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

const addUser = (id, name, email, password) => {
  const users = loadUsers();
  users.push({ id, name, email, password });
  saveUsers(users);
  console.log('User added successfully!');
};

const getUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);
  if (user) {
    console.log('User found:', user);
  } else {
    console.log('User not found!');
  }
};

const updateUser = (id, newPassword) => {
  const users = loadUsers();
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex].password = newPassword;
    saveUsers(users);
    console.log('User password updated successfully!');
  } else {
    console.log('User not found!');
  }
};

const deleteUser = (id) => {
  let users = loadUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  if (users.length !== updatedUsers.length) {
    saveUsers(updatedUsers);
    console.log('User deleted successfully!');
  } else {
    console.log('User not found!');
  }
};

const command = argv._[0];
switch (command) {
  case 'add':
    addUser(uuidv4(), argv.name, argv.email, argv.password);
    break;
  case 'read':
    getUser(argv.id);
    break;
  case 'update':
    updateUser(argv.id, argv.password);
    break;
  case 'delete':
    deleteUser(argv.id);
    break;
  default:
    console.log('Invalid command! Use: add, read, update, or delete.');
}
