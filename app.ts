function getFullName(userEntity: {
  firstname: string;
  surname: string;
}): string {
  return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
  firstname: 'Иван',
  surname: 'Иванов',
  city: 'Moscow',
  age: 33,
  scills: {
    dev: true,
    devops: true,
  },
};

console.log(getFullName(user));
