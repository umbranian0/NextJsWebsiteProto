import Link from 'next/link'
const NavBar = () => (

  <div className="navbar">
  <a href="/" className="allign-left">Home</a>
  
  <div className="subnav">
    <a className="subnavbtn">Product 1 <i className="fa fa-caret-down"></i></a>
    <div className="subnav-content">

    <a><Link href="/product1/overview">Overview</Link></a>
    <a><Link href="/product1/documentation">Documentation</Link></a>
    <a><Link href="/product1/download">Download</Link></a>
    </div>
    </div>

    <div className="subnav">
    <a className="subnavbtn">Product 2 <i className="fa fa-caret-down"></i></a>
    <div className="subnav-content">
    <a ><Link href="/product1/overview">Overview</Link></a>
    <a ><Link href="/product1/documentation">Documentation</Link></a>
    <a ><Link href="/product1/download">Download</Link></a>
    </div>
    </div>

    <div className="subnav">
    <a className="subnavbtn">Product 3 <i className="fa fa-caret-down"></i></a>
    <div className="subnav-content">
    <a ><Link href="/product1/overview">Overview</Link></a>
    <a ><Link href="/product1/documentation">Documentation</Link></a>
    <a ><Link href="/product1/download">Download</Link></a>
    </div>
    </div>

    <div className="subnav">
    <a className="subnavbtn">Product 4 <i className="fa fa-caret-down"></i></a>
    <div className="subnav-content">
    <a ><Link href="/product1/overview">Overview</Link></a>
    <a ><Link href="/product1/documentation">Documentation</Link></a>
    <a ><Link href="/product1/download">Download</Link></a>
    </div>
  </div>
  <a href="/contact" className="allign-right" >Contact</a>


    <style jsx>{`
      .allign-right{
        text-align:right;
        right:0;
        position:absolute;
      }
      .allign-left{
        text-align:left;
        left:0;
        position:absolute;
      }


      .navbar {
        overflow: hidden;
        background-color: #333;
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
      }
      
      .navbar a {
        float: left;
        font-size: 16px;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      .subnav {
        float: left;
        overflow: hidden;  
      }
      
 
      .subnav .subnavbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }
      

      .navbar a:hover, .subnav:hover .subnavbtn {
        background-color: purple;
      }
      
 
      .subnav-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }

      .subnav-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
    
      .subnav-content a:hover {
        color: black;
        background-color: #ddd;
      }
      
  
      .subnav:hover .subnav-content {
        display: block;
      } 

 

    `}</style>
  </div>
);

export default NavBar;