const express = require('express');
const app = express();

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
app.get("/toto", (req, res) => {
      res.send("Hello toto");
  });

  
const things = [
    { id: 1, name: "Socks" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Passion" },
    { id: 3, name: "Passion" },
    { id: 3, name: "Passion" },
    { id: 3, name: "Passion" },
    { id: 3, name: "Passion" },
    { id: 3, name: "Passion" },
    { id: 3, name: "Passion" },
  ];
  
  app.get("/things", (req, res) => {
    res.json(things);
  });

  app.get('/things/:id', (req, res) => {

    const wantedId = parseInt(req.params.id)
  
    const thing = things.find(
      (thing) => thing.id === wantedId
    );
  
    if (thing != null) {
      res.json(thing);
    } else {
      res.sendStatus(404);
    }

  });