import { useState } from "react"
import "./App.css"
import { motion } from "framer-motion"

export default function Knowmore() {
    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <motion.div className="wrapper" transition={{ duration: 1 }} animate={{ y: -50  }}>
            <div className="accordtion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => {toggle(i)}}>
                            <h2>{item.question}</h2>
                            <span>
                                {selected === i ? '-' : '+'}
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

const data = [
    {
        question: "what is norway, anyway?",
        answer:
            'Norway, officially the Kingdom of Norway, is a Nordic country in Northern Europe, the mainland territory of which comprises the western and northernmost portion of the Scandinavian Peninsula. The remote Arctic island of Jan Mayen and the archipelago of Svalbard also form part of Norway. Bouvet Island, located in the Subantarctic, is a dependency of Norway; it also lays claims to the Antarctic territories of Peter I Island and Queen Maud Land. The capital and largest city in Norway is Oslo.'
    },

    {
        question: "Climate",
        answer:
        "The southern and western parts of Norway, fully exposed to Atlantic storm fronts, experience more precipitationand have milder winters than the eastern and far northern parts. Areas to the east of the coastal mountains are in a rain shadow, and have lower rain and snow totals than the west. The lowlands around Oslo have the warmest summers, but also cold weather and snow in wintertime. The sunniest weather is along the south coast, but sometimes even the coast far north can be very sunny - the sunniest month with 430 sun hours was recorded in Tromsø Because of Norway's high latitude, there are large seasonal variations in daylight. From late May to late July,        the sun never completely descends beneath the horizon in areas north of the Arctic Circle (hence Norway's description as the Land of the Midnight sun), and the rest of the country experiences up to 20 hours of daylight per day. Conversely, from late November to late January, the sun never rises above the horizon in the north, and daylight hours are very short in the rest of the country.",
    },

    {
        question: "Population and geography",
        answer:
        "Norway has a total area of 385,207 square kilometres (148,729 sq mi) and had a population of 5,425,270 in January 2022. The country shares a long eastern border with Sweden at a length of 1,619 km (1,006 mi). It is bordered by Finland and Russia to the northeast and the Skagerrak strait to the south, on the other side of which are Denmark and the United Kingdom. Norway has an extensive coastline, facing the North Atlantic Ocean and the Barents Sea. The maritime influence dominates Norway's climate, with mild lowland temperatures on the sea  coasts; the interior, while colder, is also significantly milder than areas elsewhere in the world on such northerly latitudes. Even during polar night in the north, temperatures above freezing are commonplace on the coastline. The maritime influence brings high rainfall and snowfall to some areas of the country.",
    },

    {
        question: "Biodiversity",
        answer:
        "The total number of species include 16,000 species of insects (probably 4,000 more species yet to be described), 20,000 species of algae, 1,800 species of lichen, 1,050 species of mosses, 2,800 species of vascular plants, up to 7,000 species of fungi, 450 species of birds (250 species nesting in Norway), 90 species of mammals, 45 fresh-water species of fish, 150 salt-water species of fish, 1,000 species of fresh-water invertebrates, and 3,500 species of salt-water invertebrates. About 40,000 of these species have been described by science. The red list of 2010 encompasses 4,599 species. Norway contains five terrestrial ecoregions: Sarmatic mixed forests, Scandinavian coastal conifer forests, Scandinavian and Russian taiga, Kola Peninsula tundra, and Scandinavian montane birch forest and grasslands.",
    },
]

{/* <div class="grid">
            <div class="grid-item">
                <div class="card">
                    <div class="card-content">
                        <div class="card-header">
                            Norway
                        </div>
                        <div class="card-text">
                            Norway, officially the Kingdom of Norway, is a Nordic country in Northern Europe, the mainland territory of
                            which comprises the western and northernmost portion of the Scandinavian Peninsula. The remote Arctic island of
                            Jan Mayen and the archipelago of Svalbard also form part of Norway. Bouvet Island, located in the 
                            Subantarctic, is a dependency of Norway; it also lays claims to the Antarctic territories of Peter I Island and
                            Queen Maud Land. The capital and largest city in Norway is Oslo.
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-item">
                <div class="card">
                    <div class="card-content">
                        <div class="card-header">
                            Population and Geography
                        </div>
                        <div class="card-text">
                            Norway has a total area of 385,207 square kilometres (148,729 sq mi) and had a population of 5,425,270 in
                            January 2022. The country shares a long eastern border with Sweden at a length of 1,619 km (1,006 mi). It is
                            bordered by Finland and Russia to the northeast and the Skagerrak strait to the south, on the other side of
                            which are Denmark and the United Kingdom. Norway has an extensive coastline, facing the North Atlantic Ocean and
                            the Barents Sea. The maritime influence dominates Norway's climate, with mild lowland temperatures on the sea
                            coasts; the interior, while colder, is also significantly milder than areas elsewhere in the world on such 
                            northerly latitudes. Even during polar night in the north, temperatures above freezing are commonplace on the
                            coastline. The maritime influence brings high rainfall and snowfall to some areas of the country. 
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-item">
                <div class="card">
                    <div class="card-content">
                        <div class="card-header">
                            Climate
                        </div>
                        <div class="card-text">
                            The southern and western parts of Norway, fully exposed to Atlantic storm fronts, experience more precipitation
                            and have milder winters than the eastern and far northern parts. Areas to the east of the coastal mountains are
                            in a rain shadow, and have lower rain and snow totals than the west. The lowlands around Oslo have the warmest
                            summers, but also cold weather and snow in wintertime. The sunniest weather is along the south coast, but 
                            sometimes even the coast far north can be very sunny - the sunniest month with 430 sun hours was recorded in
                            Tromsø 
                            Because of Norway's high latitude, there are large seasonal variations in daylight. From late May to late July,
                            the sun never completely descends beneath the horizon in areas north of the Arctic Circle (hence Norway's
                            description as the "Land of the Midnight sun"), and the rest of the country experiences up to 20 hours of 
                            daylight per day. Conversely, from late November to late January, the sun never rises above the horizon in the
                            north, and daylight hours are very short in the rest of the country.
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-item">
                <div class="card">
                    <div class="card-content">
                        <div class="card-header">
                            Biodiversity
                        </div>
                        <div class="card-text">
                            The total number of species include 16,000 species of insects (probably 4,000 more species yet to be described),
                            20,000 species of algae, 1,800 species of lichen, 1,050 species of mosses, 2,800 species of vascular plants, up
                            to 7,000 species of fungi, 450 species of birds (250 species nesting in Norway), 90 species of mammals, 45
                            fresh-water species of fish, 150 salt-water species of fish, 1,000 species of fresh-water invertebrates, and
                            3,500 species of salt-water invertebrates. About 40,000 of these species have been described by science.
                            The red list of 2010 encompasses 4,599 species. Norway contains five terrestrial ecoregions: Sarmatic mixed
                            forests, Scandinavian coastal conifer forests, Scandinavian and Russian taiga, Kola Peninsula tundra, and 
                            Scandinavian montane birch forest and grasslands.
                        </div>
                    </div>
                </div>
            </div>
            </div> */}
