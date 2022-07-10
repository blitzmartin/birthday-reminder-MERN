import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Person from '../models/personModel.js';

const personRouter = express.Router();


personRouter.get('/', async (req, res) => {
    const people = await Person.find();
    res.send(people);
});

personRouter.post('/addperson', expressAsyncHandler(async( req, res) => {
    const newPerson = await Person.create({
        name: req.body.name,
        bday: req.body.bday,
        bornYear: req.body.bornYear,
        image: req.body.image,
    });
    const person = await newPerson.save();
    res.send({
        _id: person._id,
        name: person.name,
        bday: person.bday,
        bornYear: person.bornYear,
        image: person.image,
      });
}));

export default personRouter;