import Iframe from 'react-iframe';
import NavBar from "./navBar";
import NavBar2 from "./navBar2";
//import "./Header.scss";
import '../styles/Home.module.css';
import { motion } from 'framer-motion'

  const Header = () => (

        <div>
      
          <link rel="icon" href="/AutokromaLogo.png" />
        
          <motion.div className="resp-container"  initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1
            }
          },
        }}>
            <div className="page-container-welcome">

            </div>
        </motion.div>

      
        <style jsx>{`
        
        .page-container-welcome {
          text-align: center;
          height: 100vh;
          position: sticky;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: center;
          background-size: cover;
          background-image: url("../aftercodecs_box.jpg");
        }
        .resp-container {
          position: sticky;
          float: none;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 0%);
        }

        .resp-iframe {
          position: sticky;
          padding-top: 30%;
          left: 100vh;
          height: 100%;
          border: 0;
        }
        `}</style>
      </div>
      
  );
 
        
       
  export default Header;