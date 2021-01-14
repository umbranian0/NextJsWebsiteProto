import Link from 'next/link'
import '@fortawesome/fontawesome-free/css/all.css';
const Footer = () => (
  <div className="footer">
    <footer>
        <div className="allign-left">
        <Link href="https://autokroma.us17.list-manage.com/subscribe?u=1da24c3edad543181b6cb75f8&id=7a5f235bce">
          <a><i className="fab fa-book"> </i> Subscribe to our Newsletter </a>
        </Link>
        </div>

        <a
          href="https://www.autokroma.com"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img src="/AutokromaLogo.png" alt="Autokroma" className="logo" />
        </a> 
        <a>

        <div className="allign-right">
        <p>Our socials</p>
        
        <Link href="https://twitter.com/Autokroma">
          <a> <i className="fab fa-twitter"> </i></a>
        </Link>
       
        <Link href="https://www.facebook.com/Autokroma/">
          <a> <i className="fab fa-facebook"> </i> </a>
        </Link>
        </div>

        </a>
      </footer>
      
      <style jsx>{`

      .allign-right{
        text-align:right;
        right:0;
        position:absolute;
        padding-right: 25px;
        display: inline-block;
      }
      .allign-left{
        text-align:left;
        left:280px;
        position:absolute;
        padding-left: 25px;
      }

        footer {
        display:block;  
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo {
          height: 2em;
          width: 2em;
          border-radius: 50%;
          
        }
        
      `}</style>
  </div>
     
     


  );
  
  export default Footer;