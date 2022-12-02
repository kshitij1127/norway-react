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

export default function Cards() {
    return (
        <div className='grid'>
            {data.map((item, i) => (
            <div class="grid-item">
                <div class="card">
                        <img class="card-img" src={item.image} alt="image"/>
                        <div class="card-content">
                            <div class="card-header">
                                {item.nameOfPlace}
                            </div>
                            <div class="card-text">
                                {item.description}
                            </div>
                            <a href={item.link} target="_blank" class="card-btn">
                                knowmore
                            </a>
                        </div>
                </div>
            </div>
            ))}
        </div>
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
        description: "Preikestolen or Prekestolen is a tourist attraction in the municipality of Strand in Rogaland county, Norway. Preikestolen is a steep cliff which rises 604 metres (1,982 ft) above Lysefjorden. Atop the cliff, there is an almost flat top of approximately 25 by 25 metres (82 ft × 82 ft).", 
        link: 'https://en.wikipedia.org/wiki/Preikestolen', 
    },

    {
        image: tourplace3,
        nameOfPlace: '',
        description: '', 
        link: '', 
    },

    {
        image: tourplace4,
        nameOfPlace: '',
        description: '', 
        link: '', 
    },

    {
        image: tourplace5,
        nameOfPlace: '',
        description: '', 
        link: '', 
    },

    {
        image: tourplace6,
        nameOfPlace: '',
        description: '', 
        link: '', 
    },

    {
        image: tourplace7,
        nameOfPlace: '',
        description: '', 
        link: '', 
    },

    {
        image: tourplace8,
        nameOfPlace: '',
        description: '', 
        link: '', 
    },

    {
        image: tourplace9,
        nameOfPlace: '',
        description: '', 
        link: '', 
    },
]
