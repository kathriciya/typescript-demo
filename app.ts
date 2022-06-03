function getFullName(firstname: string, surname: string): string {
  return `${firstname}${surname}`;
}
const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname}${surname}`;
};

function сheckFullName(firstname, surname) {
  if (typeof firstname !== 'string') {
    throw new Error('!!!');
  }
  return `${firstname}${surname}`;
}

console.log(сheckFullName(true, false));
