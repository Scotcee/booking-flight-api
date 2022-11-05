import { v4 as uuidv4 } from 'uuid';

let flights = [
    {
        title: "flight to canada",
        time: "1pm",
        price: 26000,
        date: "26-06-2022"
    }
    // {
    //     title: "flight to australia",
    //     time: "11pm",
    //     price: 40000,
    //     date: "31-06-2022"
    // }
]
export const allFlights = (req, res)=>{
    console.log(flights);
    return res.json(flights)
}

export const addFlight = (req, res)=>{
    //flight.push method
    const flight = req.body;
    
    const flightId=   uuidv4();

    const allFlightId = { ...flight, id: flightId}

    flights.push(allFlightId);

    res.send (`${flight.title} has been updated successfully`);

}
export const getFlight = (req, res)=>{

    const  {id} = req.params;

    const foundFlight = flights.find((flight) => flight.id ===id );

    res.send(foundFlight);
}
export const deleteFlights = (req, res)=>{
    const {id} = req.params;

    flights = flights.filter((flight)=>flight.id !== id );

    res.send(`Flight with ${id} deleted`)
}

export const updateFlight = (req, res)=>{
    const {id} = req.params;

    const {title, time, date} = req.body;
    const updatedFlight = flights.find((flight)=> flight.id ===id);

    if (title) updatedFlight.title = title;
    
    if (time)  updatedFlight.time = time;
    
    if (date)  updatedFlight.date = date;
    
    res.send(`user with the ${id} has updated flight`)

}

