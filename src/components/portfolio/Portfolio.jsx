import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items =[
    {
        id:1,
        title:"Realtime Code-Editor",
        img:"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tenetur provident ratione facilis velit quisquam",
    },
    {
        id:2,
        title:"Urban Explorer",
        img:"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tenetur provident ratione facilis velit quisquam",
    },
    {
        id:3,
        title:"Netflix Clone",
        img:"https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tenetur provident ratione facilis velit quisquam",
    },
    {
        id:4,
        title:"To-Do Web App",
        img:"https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tenetur provident ratione facilis velit quisquam",
    },
];

const Single = ({item}) =>{

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start", "end start"]
    })

    const y= useTransform(scrollYProgress, [0,1], [-300,300])

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})


    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item = {item} key={item.id}></Single>
        ))}
    </div>
  )
}

export default Portfolio