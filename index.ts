// entry level deno io
import * as path from "https://deno.land/std/io/mod.ts"
// TODO: get user input
// TODO: generate projects

let fileReader = await Deno.open("./README.md")

for await (let line of path.readLines(fileReader)) {
  console.log(line)
}
