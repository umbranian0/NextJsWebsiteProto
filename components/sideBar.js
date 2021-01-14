import Link from 'next/link'
import { motion } from 'framer-motion'
const config = {
  type: "spring",
  damping: 20,
  stiffness: 100
};
const SideBar = () => (
    <motion.div
    transition={config}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ x: 0, opacity: 0 }}
  >
    
    <nav className="sidenav">
        <ul className="main-buttons">
        <li>
            <i className="fa fa-circle fa-x2"></i>
            <Link href="/"><a  >Autokroma</a></Link>
        </li>  
        <li>
            <i className="fa fa-circle fa"></i>
            Product 1
            <ul className="hidden">
            <li><Link href="/product1/overview">Overview</Link></li>
            <li><Link href="/product1/documentation">Documentation</Link> </li>
            <li><Link href="/product1/download">Download</Link></li>
            </ul>
        </li>
        <li>
            <i className="fa fa-circle fa"></i>
            Product 2
            <ul className="hidden">
            <li><Link href="/product1/overview">Overview</Link></li>
            <li><Link href="/product1/documentation">Documentation</Link> </li>
            <li><Link href="/product1/download">Download</Link></li>
            </ul>
        </li>
        <li>
            <i className="fa fa-circle fa"></i>
            Product 3
            <ul className="hidden">
            <li><Link href="/product1/overview">Overview</Link></li>
            <li><Link href="/product1/documentation">Documentation</Link> </li>
            <li><Link href="/product1/download">Download</Link></li>
            </ul>
        </li>
        <li>
            <i className="fa fa-circle fa"></i>
            Product 4
            <ul className="hidden">
            <li><Link href="/product1/overview">Overview</Link></li>
            <li><Link href="/product1/documentation">Documentation</Link> </li>
            <li><Link href="/product1/download">Download</Link></li>
            </ul>
        </li>
        </ul>
    </nav>
    <style jsx>{`
       @import url(https://fonts.googleapis.com/css?family=Open+Sans:600);
   
       .sidenav {
         position: fixed;
         width: 280px;
         height: 100%;
         background-color: purple;
         
       }

       .sidenav .main-buttons {
         list-style-type: none;
         margin: 64px 0;
         padding: 15;
         color: white;
       }
       .sidenav .main-buttons li {
         text-transform: uppercase;
         letter-spacing: 2px;
         font-family: "Open Sans", sans-serif;
         font-size: 15px;
         font-weight: 600;
         color:white;

       }
       .sidenav .main-buttons li > a {
        text-decoration: none;
        color: white ;
       }
       .sidenav .main-buttons > li > a:hover, .sidenav .main-buttons > li > a:active, .sidenav .main-buttons > li > a:focus {
        background-color: white;
        cursor: pointer;
       color:purple;
      }

       .sidenav .main-buttons > li {
         padding: 16px 52px;
         -moz-box-sizing: border-box;
         -webkit-box-sizing: border-box;
         box-sizing: border-box;
       }
       .sidenav .main-buttons > li .fa {
         position: absolute;
         left: 12px;
         color: white;
       }
       .sidenav .main-buttons > li:hover, .sidenav .main-buttons > li:active, .sidenav .main-buttons > li:focus {
         background-color: white;
         cursor: pointer;
        color:purple;
       }
       .sidenav .main-buttons > li:hover .hidden, .sidenav .main-buttons > li:active .hidden, .sidenav .main-buttons > li:focus .hidden {
         width: 228px;
       }
       
       .hidden {
         width: 0;
         height: 100%;
         padding: 64px 0;
         position: absolute;
         top: 0;
         right: 0;
         overflow: hidden;
         list-style-type: none;
         background-color: white;
         -moz-transition: 0.3s;
         -o-transition: 0.3s;
         -webkit-transition: 0.3s;
         transition: 0.3s;
         
       }
       .hidden li {
         padding: 16px 24px;
        color:white;
       }
       .hidden li:hover, .hidden li:active, .hidden li:focus {
         background-color: #827f82;;
       }
       
       body {
         background-color: white;
         line-height: 30px;
       }
       
       html,
       body {
         height: 100%;
       }
        
        }
    `}</style> 
  </motion.div>
);

export default SideBar;