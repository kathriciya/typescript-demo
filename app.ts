// const skill: [number, string] = [1, 'Dev'];
// skill[0] = 2; we can change

const skill: readonly [number, string] = [1, 'Dev'];

const skills: readonly string[] = ['Dev', 'DevOps'];

// const skills: Array<string> = ['Dev', 'DevOps']; - also correct

// const skills: ReadonlyArray<string> = ['Dev', 'DevOps']; - also correct

// skill.push('hdfg'); - doesn't work
