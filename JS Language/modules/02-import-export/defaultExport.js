// 6. `export default`
// module / declare 1! entity
export default class DefaultUser {
  constructor(name) {
    this.name = name;
  }
}

// ONLY 1! export default is ALLOWED / file
// Otherwise -> you get an error
/*
export default function defaultFunction () {
    console.log('defaultFunction');
}*/
