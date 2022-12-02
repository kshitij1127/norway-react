import tourplace1 from './images/tourplace1.png'
import tourplace2 from './images/tourplace2.jpeg'
import tourplace3 from './images/tourplace3.jpg'
import tourplace4 from './images/tourplace4.jpg'
import tourplace5 from './images/tourplace5.jpg'
import tourplace6 from './images/tourplace6.jpg'
import tourplace7 from './images/tourplace7.jpg'
import tourplace8 from './images/tourplace8.jpeg'
import tourplace9 from './images/tourplace9.jpg'

import './App.css'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function Cards() {
    return (
        <motion.div animate={{ y: -100 }} transition={{ duration: 1 }}>
            <h1 className='header'>Tourism</h1>
            <div className='grid'>
                {data.map((item, i) => (
                <motion.div class="grid-item"  whileHover={{ scale: 1.2, duration: 1 }}>
                    <text className='grid-text'>{item.nameOfPlace}</text>
                    <div class="card">
                            <img class="card-img" src={item.image} alt="image"/>
                            <div class="card-content">
                                <div class="card-header">
                                    {item.nameOfPlace}
                                </div>
                                <div class="card-text">
                                    {item.description}
                                </div>
                                <motion.a href={item.link} target="_blank" class="card-btn" whileHover={{ scale: 1.2 }} >
                                    knowmore
                                </motion.a>
                            </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

const data = [
    {
        image: tourplace1,
        nameOfPlace: "Sognefjord: Norway's Largest Fjord",
        description: "The Sognefjord or Sognefjorden, nicknamed the King of the Fjords, is the largest and deepest fjord in Norway.", 
        link: 'https://en.wikipedia.org/wiki/Sognefjord', 
    },

    {
        image: tourplace2,
        nameOfPlace: 'Pulpit Rock, Preikestolen',
        description: "Preikestolen or Prekestolen is a tourist attraction in the municipality of Strand in Rogaland county, Norway.", 
        link: 'https://en.wikipedia.org/wiki/Preikestolen', 
    },

    {
        image: tourplace3,
        nameOfPlace: "Norway's Arctic City: Tromsø",
        description: 'Tromsø ; Northern Sami: Romsa is a municipality in Troms og Finnmark county, Norway. The administrative centre of the municipality is the city of Tromsø. Tromsø lies in Northern Norway.', 
        link: 'https://en.wikipedia.org/wiki/Troms%C3%B8', 
    },

    {
        image: tourplace4,
        nameOfPlace: 'Lofoten Islands',
        description: 'Lofoten is an archipelago and a traditional district in the county of Nordland, Norway. Lofoten has distinctive scenery with dramatic mountains and peaks, open sea and sheltered bays, beaches and untouched lands.', 
        link: 'https://en.wikipedia.org/wiki/Lofoten', 
    },

    {
        image: tourplace5,
        nameOfPlace: 'Bygdoy Peninsula, Oslo',
        description: 'Bygdøy or Bygdø is a peninsula situated on the western side of Oslo, Norway. Administratively, Bygdøy belongs to the borough of Frogner; historically Bygdøy was part of Aker Municipality and became part of Oslo in 1948.', 
        link: 'https://en.wikipedia.org/wiki/Bygd%C3%B8y', 
    },

    {
        image: tourplace6,
        nameOfPlace: 'The Olympic Town of Lillehammer',
        description: 'Lillehammer is a town which is the administrative centre of Lillehammer Municipality in Innlandet county, Norway.', 
        link: 'https://en.wikipedia.org/wiki/Lillehammer_(town)', 
    },

    {
        image: tourplace7,
        nameOfPlace: 'Bryggen Hanseatic Wharf, Bergen',
        description: 'Bryggen (the dock), also known as Tyskebryggen, is a series of Hanseatic heritage commercial buildings lining up the eastern side of the Vågen harbour in the city of Bergen, Norway.', 
        link: 'https://en.wikipedia.org/wiki/Bryggen', 
    },

    {
        image: tourplace8,
        nameOfPlace: 'Akershus Fortress, Oslo',
        description: 'Akershus Fortress or Akershus Castle is a medieval castle in the Norwegian capital Oslo that was built to protect and provide a royal residence for the city.', 
        link: 'https://en.wikipedia.org/wiki/Akershus_Fortress', 
    },

    {
        image: tourplace9,
        nameOfPlace: 'Geirangerfjord',
        description: 'The Geiranger Fjord (Norwegian: Geirangerfjorden) is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway.', 
        link: 'https://en.wikipedia.org/wiki/Geirangerfjord', 
    },
]
