import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial:{
     x:-500,
     opacity:0,  
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildern:0.1,
        }  
       },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }

}

const sliderVariants = {
    initial:{
     x:0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        }
       },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>SHUBHAM GARG</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer and Designer</motion.h1>
                    <div className="buttons">
                        <a href="#Portfolio">
                            <motion.button variants={textVariants} whileHover={{backgroundColor: "white", color: "black", border:"1px solid black"}}>See the Latest Works</motion.button>
                        </a>
                        <a href="#Contact">
                            <motion.button variants={textVariants} whileHover={{backgroundColor: "white" ,color: "black", border:"1px solid black"}}>Contact Me</motion.button>
                        </a>
                            
                    </div>
                    <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
              Web Developer Aspiring UI/UX Designer  
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero