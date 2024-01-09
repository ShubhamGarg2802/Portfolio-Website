import { useRef } from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    return (
        
        <div className="container">
            <motion.div className="services" variants={variants} initial="initial" ref={ref} >
                <motion.div className="textContainer" variants={variants}>
                    <p>"Code is like humor. <br />When you have to explain it, it's bad."</p>
                    <hr />
                </motion.div>
                <motion.div className="titleContainer" variants={variants}>
                    <div className="title">
                        <img src="/people.webp" alt="" />
                        <h1>
                            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                        </h1>
                    </div>
                    <div className="title">
                        <h1>
                            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business
                        </h1>
                        <button>What I Do?</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>Web Development</h2><br/>
                        <p>Elevate your online presence with dynamic and responsive websites tailored to your needs. I specialize in crafting robust and user-friendly web solutions, ensuring a seamless digital experience for your audience.</p><br/>
                        <a href="#Portfolio">
                            <motion.button whileHover={{backgroundColor:"rgb(255, 183, 49)"}}>Go</motion.button>
                        </a>
                        <br/>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>UI/UX Design</h2><br/>
                        <p>Transform ideas into visually stunning and intuitive user interfaces. My expertise in UI/UX design focuses on creating engaging and user-centric experiences, combining aesthetics with functionality for a lasting impact.</p><br/>
                        <a href="https://www.figma.com/file/JzeOKjJWcjN3DhZjljWG33/Travel-Website-Template-(Community)?type=design&node-id=1-3&mode=design&t=k6PLNyAUNyVcIelv-0" target="_blank">
                            <motion.button whileHover={{backgroundColor:"rgb(255, 183, 49)"}}>Go</motion.button>
                        </a>
                        <br/>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>Graphic Design</h2><br/>
                        <p>From captivating visuals to eye-catching promotional materials, I bring creativity to life. My graphic design services cover a spectrum of needs, delivering compelling and brand-aligned designs that leave a memorable impression.</p><br/>
                        <a href="https://drive.google.com/drive/folders/1xFSEYqL9tbvAKKlu8FbPVcmdlTIrTt4X?usp=drive_link" target="_blank">
                            <motion.button whileHover={{backgroundColor:"rgb(255, 183, 49)"}}>Go</motion.button>
                        </a>
                        <br/>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>Logo Design</h2><br/>
                        <p>Unleash the power of a distinctive brand identity with a unique logo. I craft logos that reflect your brand essence, combining creativity and strategic thinking to ensure your business stands out in a crowded digital landscape.</p><br/>
                        <a href="https://drive.google.com/drive/folders/1dTsVA6yYhoID-bjcrnWWukLuyZDFkMja?usp=sharing" target="_blank">
                            <motion.button whileHover={{backgroundColor:"rgb(255, 183, 49)"}}>Go</motion.button>
                        </a>
                        <br/>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Services