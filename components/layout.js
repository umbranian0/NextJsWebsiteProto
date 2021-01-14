import Header from "./header";
import Footer from "./footer";
import SideBar from "./sideBar";
import Head from 'next/head'
//import "./Header.scss";
const Layout = props => (
    
    <div className="main">
    <div >
      <SideBar>
        
      </SideBar>
    </div>
    <Head>
    <title>Autokroma</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" /> 
    </Head>

    <Header />
    <div className="container">{props.children}
    </div>
    <Footer />
    

   <style jsx>{`
        
        .page-container-welcome {
          text-align: center;
          height: 80vh;
          position: relative;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: center center;
          background-size: cover;
          background-image: url("../aftercodecs_box.jpg");
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          
        }
        .resp-iframe {
          position: sticky;
          padding-top: 30%;
          left: 100vh;
          width: 100%;
          height: 100%;
          border: 0;
        }
        `}</style>  
  </div>  

);

export default Layout;