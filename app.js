require("dotenv").config();
const { KEY, TOKEN } = process.env;

const Trello = require("./main");
const trello = new Trello(KEY, TOKEN);

const cardTitle = `Card Nueva ${new Date()}`;
const cardDescription = "LaunchX Card Description";
const listId = "62625f5f78af597b71f391e0";

console.log("¡Ejecutando!");

trello.addCard(cardTitle, cardDescription, listId, (error, trelloCard) => {
  if (error) console.log("Could not add card:", error);
  else console.log("Added card:", trelloCard);
});
