/* console.log('Welcome to Deno');

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body); */

/**
 * hello-world.js
 */
function capitalize(word:string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  function hello(name:string) {
    return "Hello " + capitalize(name);
  }
  
  console.log(hello("joanne"));
  console.log(hello("Dameon"));
  console.log(hello("June"));