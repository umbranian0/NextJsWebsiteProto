import Layout from '../../components/layout'
import React from 'react' 
import Link from 'next/link'
import '../../styles/Home.module.css'
import Iframe from 'react-iframe'
import data from '../../components/StaticDb/index.json'

//get the length of JSON objects
//Object.keys(data.Products).length

//function that write the products to HTML
export function writeProducts(){
  const items = [];

  for (const index  of Object.keys(data.Products)) {
    var subItems = [];
    subItems.push(<h3 >{data.Products[index].Name}</h3>)   
    subItems.push(<p>{data.Products[index].Description} </p>)
    
    for (const jndex of Object.keys(data.Products[index].Lines)) {
      subItems.push(<li>{data.Products[index].Lines[jndex]}</li>)
    }
    items.push(<Link href="https://www.autokroma.com/AfterCodecs"><a className="card">{subItems}</a></Link>)
  }

  return (
    <div>
    <h2 > Products </h2>
     <div className="resp-container"> {items}</div>
  </div>
  )

}
//function that write the Articles to HTML
export function writeArticles(){
  const items = [];

  for (const index  of Object.keys(data.Articles)) {
    var subItems = [];
    subItems.push(<h3 >{data.Articles[index].Name}</h3>)   
    subItems.push(<p>{data.Articles[index].Description} </p>)
    
    items.push(<p>{subItems}</p>)
  }

  return (
   <div>
     <h2 > Articles </h2>
      <div className="resp-container"> {items}</div>
   </div>
  )

}

//function that write the TechnicalSpecification to HTML
export function writeTechnicalSpecifications(){
  const items = [];
  for (const index  of Object.keys(data.TechnicalSpecification.Requirments)) {
    var subItems = [];
    subItems.push(<h3 > Requirments </h3>)
    subItems.push(<p >{data.TechnicalSpecification.Requirments[index]}</p>)       
    items.push(<div>{subItems}</div>)
  }
  for (const index  of Object.keys(data.TechnicalSpecification.CodecsAndContainers)) {
    var subItems = [];
    subItems.push(<h3 > Codecs And Containers </h3>)
    subItems.push(<p >{data.TechnicalSpecification.CodecsAndContainers[index]}</p>)       
    items.push(<div>{subItems}</div>)
  }
  for (const index  of Object.keys(data.TechnicalSpecification.KnowLimitations)) {
    var subItems = [];
    subItems.push(<h3 > Know Limitations </h3>)
    subItems.push(<p >{data.TechnicalSpecification.KnowLimitations[index]}</p>)       
    items.push(<div>{subItems}</div>)
  }
  for (const index  of Object.keys(data.TechnicalSpecification.ScreenShotPath)) {
    var subItems = [];
    subItems.push(<h3 > Screen Shot Path </h3>)
    subItems.push(<p >{data.TechnicalSpecification.ScreenShotPath[index]}</p>)       
    items.push(<div>{subItems}</div>)
  }

  return (
   <div>
     <h2 > TechnicalSpecification </h2>
      <div className="resp-container"> {items}</div>
   </div>
  )

}
export default function Overview() {

    return (
      <Layout> 
      
      <main>
      <h1 className="title">
        Autokroma  
        <Link href="https://dl.autokroma.com/AfterCodecs_v1.9.9_Windows_Installer.zip">
        <a> AfterCodecs </a>
        </Link>
      </h1>
      <div className="resp-container" gesture="media"  allow="encrypted-media" AllowFullScreen>
                      <Iframe className="resp-iframe" width="500px" height="300" url="https://www.youtube.com/embed/ZvBEtJeceGE"/> 
      </div>  
      <div className="grid">
      {writeProducts()}
      </div>
      <div className="grid">
      {writeArticles()}
      </div>
      <div className="grid">
      {writeTechnicalSpecifications()}
      </div>
    
      
    </main>
    <style jsx>{`
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
            .resp-container {
              position: relative;
              float: none;
              padding: 10px;
            }
            .resp-iframe {
              position: sticky;
              padding-top: 30%;
              left: 100vh;
              height: 100%;
              border: 0;
            }
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

        
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

 
    `}</style>

    <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
  </Layout>
  
    )
}
