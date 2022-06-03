const skills: string[] = ['Dev', 'DevOps', 'Testing'];
// const skills: any[] = ['Dev', 'DevOps', 1]; - bad solution
for (const skill of skills) {
  console.log(skill.toLowerCase());
}
const res = skills
  .filter((s: string) => s !== 'DevOps')
  .map((s: string) => s + '! ')
  .reduce((a, b) => a + b);
console.log(res);
