type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

type UserWithRole = {
  user: User;
  role: Role;
};

let user: UserWithRole = {
  user: {
    name: 'Ivan',
    age: 30,
    skills: ['1', '2'],
  },
  role: {
    name: 'admin',
    id: 1,
  },
};
