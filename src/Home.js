import './App.css'
import Knowmore from './knowmore'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home () {
    const [ move, setMove ] = useState(false)
    return (
        <div className='gradient_bg'>
            <motion.div 
            animate={{ scale: 1, y: move ? -50 : 100 }}
            className='header'
            initial={{ scale: 0 }}
            onClick = {() => {setMove(!move)}}
            transition = {{ type: "tween", duration: 1 }}
            >
                Norway
            </motion.div>
            <Knowmore />
        </div>
    )
}