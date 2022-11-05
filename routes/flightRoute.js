import express from 'express';

import { addFlight, allFlights, getFlight, deleteFlights, updateFlight } from '../controllers/flightController.js'
const router = express.Router();


//const controller = require('../controllers/flightController');
//routes in here are starting with /flights so no need to add it


//GET ALL FLIGHTS
router.get('/', allFlights )


//ADD,BOOK A FLIGHT
router.post('/', addFlight ); 


//GET SINGLE FLIGHT
//flight //id => req.params {id: id}
router.get('/:id', getFlight );

//DELETE FLIGHT
router.delete('/:id', deleteFlights)


//UPDATE A FLIGHT INFORMATION
router.patch('/:id', updateFlight )

// module.exports = router;
export default router;
 