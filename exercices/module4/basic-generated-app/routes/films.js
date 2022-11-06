var express = require('express');
var router = express.Router();

films =[];


router.get('/', (req, res, next) => {
    console.log('GET /pizzas');
    res.json(films);
  });

router.get('/:id', (req, res)=> {
    const indexofilms = films.findIndex((film) => film.id == req.params.id);
    if(indexofilms < 0) return res.sendStatus(404);
    res.json(films[indexofilms]);
})


router.post('/', (req, res) => {
    const title =   req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
    const duration = typeof req?.body?.duration !== 'number' || req.body.duration < 0
    ? undefined : req.body.duration;

    const budget = typeof req?.body?.budget !== 'number' || req.body.budget < 0  ? undefined : req.body.budget
    const link = req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;

    if (!title || !link || !duration || !budget) return res.sendStatus(400);

    const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newfilm = {id : nextId, title, duration, budget, link};
  films.push(newfilm);
  return res.json(newfilm);
})


router.delete('/:id', function (req, res) {
    const indexdelete = films.findIndex((film) => film.id == req.params.id );
    if (indexdelete <0 ) res.sendStatus(404);
    
    const itemsRemovedFromMenu = films.splice(indexdelete, 1);
    const itemRemoved = itemsRemovedFromMenu[0];
  
   return res.json(itemRemoved);
  });



module.exports = router;
