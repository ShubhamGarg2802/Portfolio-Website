import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}>Shubham Garg</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/shubhamgarg20/" target="_blank"><img src="/linkdin.png" alt="" /></a>
                <a href="https://github.com/ShubhamGarg2802" target="_blank"><img src="/github.png" alt="" /></a>
                <a href="https://m.facebook.com/profile.php/?id=100064038260623" target="_blank"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/shubham_garg03?igsh=ZGNjOWZkYTE3MQ==" target="_blank"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar