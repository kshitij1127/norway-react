import tourplace1 from './images/tourplace1.png'
import tourplace2 from './images/tourplace2.jpeg'
import tourplace3 from './images/tourplace3.jpg'
import tourplace4 from './images/tourplace4.jpg'
import tourplace5 from './images/tourplace5.jpg'
import tourplace6 from './images/tourplace6.jpg'
import tourplace7 from './images/tourplace7.jpg'
import tourplace8 from './images/tourplace8.jpeg'
import tourplace9 from './images/tourplace9.jpg'

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
        nameOfPlace: 'kitty',
        description: 'kitten', 
        link: 'hello', 
    },

    {
        image: tourplace2,
        nameOfPlace: '',
        description: '', 
        link: '', 
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
