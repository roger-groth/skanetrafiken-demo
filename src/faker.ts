import { faker } from '@faker-js/faker';

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: Date;
}

function createRandomUser(): User {
  return {
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate(),
  };
}

export const getUsers = (count: number): User[] => {
  return faker.helpers.multiple(createRandomUser, {
    count,
  });
};
