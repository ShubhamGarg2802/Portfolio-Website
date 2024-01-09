import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items =[
    {
        id:1,
        title:"Realtime Code-Editor",
        img:"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"The Web Application is based on React and WebSocket which enables it's users to code collaboratively on Realtime updates.",
        link:"https://realtime-editor-f1s2oryg9-shubham-gargs-projects-8d124678.vercel.app",
    },
    {
        id:2,
        title:"Urban Explorer",
        img:"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"This core Front-End Web Application hepls the user explore some Hidden Gems of their city by providing them essential details.",
        link:"https://www.figma.com/file/JzeOKjJWcjN3DhZjljWG33/Travel-Website-Template-(Community)?type=design&node-id=1-3&mode=design&t=rt45bG7osbawy6Vf-0",
    },
    {
        id:3,
        title:"Netflix Clone",
        img:"https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Glide through a user-friendly interface crafted with HTML, CSS, JavaScript.",
        link:"",
    },
    {
        id:4,
        title:"To-Do Web App",
        img:"https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=600",
        desc:"Ditch the sticky notes: Organize tasks effortlessly with my intuitive to-do app.",
        link:"https://to-do-bywyhwojl-shubham-gargs-projects-8d124678.vercel.app/",
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
                        <a href={item.link} target="_blank">
                            <button>See Demo</button>
                        </a>
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