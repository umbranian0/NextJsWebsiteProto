import Layout from '../components/layout'
import React from 'react' 
import Link from 'next/link'
import '../styles/Home.module.css'
import Iframe from 'react-iframe'


export default function Home() {

    return (
    <Layout> 
      
      <main>
        <h1 className="title">
          Autokroma  
          <Link href="https://dl.autokroma.com/">
          <a> AfterCodecs </a>
          </Link>
        </h1>
        <div className="resp-container" gesture="media"  allow="encrypted-media" AllowFullScreen>
                        <Iframe className="resp->iframe" width="500px" height="300" url="https://www.youtube.com/embed/ZvBEtJeceGE"/> 
        </div>  

      
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 2em;
          width: 2em;
          border-radius: 50%;
          
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        
      .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
  
            max-width: 800px;
            margin-top: 3rem;
  
            padding: 4.65rem 4vw;
            margin-left: 0;
            margin-right: 0;
          }
  
          .card {
            box-sizing: border-box;
            margin: 0;
            margin-right: 0px;
            margin-left: 0px;
            padding-bottom: 128px;
            height: 100%;
            margin: 1rem;
  
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
  
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
  
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
  
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
    `}</style>


    </Layout>
    )  
}