import Link from 'next/link'

const NavBar = () => (
  
<div className="sticky">
  <nav>
    <ul className="nav">
      <li><a href="/" >Home</a></li>
      <li><a href="#">Product 1</a>
        <ul>
          <li><a><Link href="/product1/overview">Overview</Link></a></li>
          <li><a><Link href="/product1/documentation">Documentation</Link></a></li>
          <li><a><Link href="/product1/download">Download</Link></a></li>
        </ul>
      </li>
      <li><a href="#">Product 2</a>
        <ul>
          <li><a><Link href="/product1/overview">Overview</Link></a></li>
          <li><a><Link href="/product1/documentation">Documentation</Link></a></li>
          <li><a><Link href="/product1/download">Download</Link></a></li>
        </ul>
      </li>
      <li><a href="#">Product 3</a>
        <ul>
          <li><a><Link href="/product1/overview">Overview</Link></a></li>
          <li><a><Link href="/product1/documentation">Documentation</Link></a></li>
          <li><a><Link href="/product1/download">Download</Link></a></li>
        </ul>
      </li>
      <li><a href="#">Product 4</a>
        <ul>
          <li><a><Link href="/product1/overview">Overview</Link></a></li>
          <li><a><Link href="/product1/documentation">Documentation</Link></a></li>
          <li><a><Link href="/product1/download">Download</Link></a></li>
        </ul>
      </li>
      <li>  <a href="#contact"  >Contact</a></li>
    </ul>



    <style jsx>{`
    .sticky {
        position: sticky;

        display: flex;
        top: 0;
        width: 100%;
      }
    nav {    
      display: block;
      text-align: center;
      background-color:white;
    }
    
    nav ul {
      margin: 0;
      padding:0;
      list-style: none;
    }
    .nav a {
      display:block; 
      background: #111; 
      color: #fff; 
      text-decoration: none;
      padding: 0.8em 1.8em;
      text-transform: uppercase;
      font-size: 80%;
      letter-spacing: 2px;
      text-shadow: 0 -1px 0 #000;
      position: relative;
    }
    .nav{  
      vertical-align: top; 
      display: inline-block;
      box-shadow: 
        1px -1px -1px 1px #000, 
        -1px 1px -1px 1px #fff, 
        0 0 6px 3px #fff;
      border-radius:6px;

    }
    .nav li {
      position: relative;
    }
    .nav > li { 
      float: left; 
      border-bottom: 4px #aaa solid; 
      margin-right: 1px; 
    } 
    .nav > li > a { 
      margin-bottom: 1px;
      box-shadow: inset 0 2em .33em -0.5em #555; 
    }
    .nav > li:hover, 
    .nav > li:hover > a { 
      border-bottom-color: purple;
    }
    .nav li:hover > a { 
      color:white; 
    }
    .nav > li:first-child { 
      border-radius: 4px 0 0 4px;
    } 
    .nav > li:first-child > a { 
      border-radius: 4px 0 0 0;
    }
    .nav > li:last-child { 
      border-radius: 0 0 4px 0; 
      margin-right: 0;
    } 
    .nav > li:last-child > a { 
      border-radius: 0 4px 0 0;
    }
    .nav li li a { 
      margin-top: 1px;
    }
    .nav li a:first-child:nth-last-child(2):before { 
      content: ""; 
      position: absolute; 
      height: 0; 
      width: 0; 
      border: 5px solid transparent; 
      top: 50% ;
      right:5px;  
    }

    /* submenu positioning*/
    .nav ul {
      position: absolute;
      white-space: nowrap;
      border-bottom: 5px solid  purple;
      z-index: 1;
      left: -99999em;
    }
    .nav > li:hover > ul {
      left: auto;
      margin-top: 5px;
      min-width: 100%;
    }
    .nav > li li:hover > ul { 
      left: 100%;
      margin-left: 1px;
      top: -1px;
    }
    /* arrow hover styling */
    .nav > li > a:first-child:nth-last-child(2):before { 
      border-top-color: #aaa; 
    }
    .nav > li:hover > a:first-child:nth-last-child(2):before {
      border: 5px solid transparent; 
      border-bottom-color: purple; 
      margin-top:-5px
    }
    .nav li li > a:first-child:nth-last-child(2):before {  
      border-left-color: #aaa; 
      margin-top: -5px
    }
    .nav li li:hover > a:first-child:nth-last-child(2):before {
      border: 5px solid transparent; 
      border-right-color: purple;
      right: 10px; 
    }

    `}</style>  
  </nav>
</div>
);

export default NavBar;