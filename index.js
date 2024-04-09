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

  
const cats = [
    { id: 1, name: "Thierry", color: "blanc" },
    { id: 2, name: "Jean", color: "noir"  },
    { id: 3, name: "Léa", color: "noir"  },
    { id: 4, name: "Matthieu", color: "blanc"  },
    { id: 5, name: "Marcotoine", color: "blanc"  },
    { id: 6, name: "Amina", color: "gris"  },
    { id: 7, name: "Gwen", color: "noir"  },
    { id: 8, name: "Michel", color: "noir"  },
    { id: 9, name: "Jeromine", color: "blanc"  },
    { id: 10, name: "Anne", color: "noir"  },
    { id: 11, name: "Sophie", color: "blanc"  },
    { id: 10, name: "Adeline", color: "gris"  },
  ];
  
  app.get("/cats", (req, res) => {
    console.log(req.query);
    let result = cats.slice();

    // Ajout filtre
    if (req.query.color) {
        result = result.filter(cat => cat.color === req.query.color);
    }

    // Ajout limite
    const limit = parseInt(req.query.limit) || 10; // 10 par défaut si non spécifié ou invalide
    result = result.slice(0, limit);

    res.json(result);
  });

  app.get('/cats/:id', (req, res) => {

    const wantedId = parseInt(req.params.id)
  
    const cat = cats.find(
      (cat) => cat.id === wantedId
    );
  
    if (cat != null) {
      res.json(cat);
    } else {
      res.sendStatus(404);
    }

  });