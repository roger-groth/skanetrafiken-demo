import { getUsers, type User } from '@/faker';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface State {
  users: User[];
  editUser?: User;
  tmpUser?: User;
}

export type DataLabels = Record<keyof User, string>;
export const dataLabels: DataLabels = {
  username: 'Användarnamn',
  firstName: 'Förnamn',
  lastName: 'Efternamn',
  email: 'Epost',
  birthdate: 'Födelsedatum',
};

export const initState: State = {
  users: getUsers(20),
};

export const useUserDataStore = defineStore('userData', () => {
  const users = ref([] as User[]);
  const editUser = ref(undefined as User | undefined);
  const tmpUser = ref(undefined as User | undefined);

  function $reset() {
    users.value = initState.users;
  }

  async function fetchUsers() {
    users.value = initState.users;
  }

  function setUserEditable(user?: User) {
    console.log({ setUserEditable: user });
    editUser.value = user;
  }

  function setTmpUser(user?: User) {
    tmpUser.value = user;
  }

  function addUser(user: User) {
    console.log({ addUser: user });
    users.value.push(user);
  }

  function updateUser() {
    const updatedUser = tmpUser.value;

    if (updatedUser) {
      const index = users.value.findIndex((u) => u.username === updatedUser.username);

      if (index !== -1) {
        users.value[index] = updatedUser;
      }
    }

    tmpUser.value = undefined;
    editUser.value = undefined;
  }

  return {
    users,
    editUser,
    tmpUser,
    fetchUsers,
    setUserEditable,
    setTmpUser,
    addUser,
    updateUser,
    $reset,
  };
});
