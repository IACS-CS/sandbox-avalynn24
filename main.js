import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface Program");

ti.output("Welcome to my program!!!!");
let name = await ti.prompt("What is your name?");
if (name === "Avalynn" || name === "Ava"||name==="avalynn"||name==="ava") {
  ti.output("Oh, hi God");
} else {
  ti.output("Hello, " + name);
  ti.output("I have some random queations");
  let KeepRepeating = true;
  while (KeepRepeating) {
    let color = await ti.prompt("what color do you assosiate with math?");
    if (color === "Red" || color=== "red") {
      ti.output("Correct!");
      KeepRepeating= false
    } else {
      ti.output("WRONG, try again");
    }
  }ti.output("next queation");
  KeepRepeating = true;
  if (KeepRepeating){
  let color = await ti.prompt("what color do you assosiate with English?")
  if (color=== "Blue"|| color=== "blue"){
    ti.output("Correct!");
  }
}
}