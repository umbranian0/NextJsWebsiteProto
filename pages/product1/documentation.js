import Layout from '../../components/layout'
import React from 'react' 
import Link from 'next/link'
import '../../styles/Home.module.css'
import data from '../../components/StaticDb/documentation.json'

//function that write the Documentation to HTML
export function writeDocumentations(){
  const items = [];
  for (const index  of Object.keys(data.Documentations)) {
    var subItems = [];
    subItems.push(<p className="card"><li >{data.Documentations[index].Description}</li></p>)   

    items.push(<Link href={data.Documentations[index].Link}><a className="card"> {subItems}</a></Link>)

  }
  return (
    <div className="grid">
       {items}
    </div>
  )
}
//function that write the FAQ to HTML
export function writeFAQ(){
  const items = [];
  items.push(<h2>General and Licensing</h2>)
  for (const index  of Object.keys(data.FAQ.Questions.GeneralLicensing)) {
    var subItems = []; 
    subItems.push(<p className="card"><li >{data.FAQ.Questions.GeneralLicensing[index].Description}</li></p>)   
    items.push(<Link href={data.FAQ.Questions.GeneralLicensing[index].Link}><a className="card"> {subItems}</a></Link>)
  }
  items.push(<h2>Workflow</h2>)
  for (const index  of Object.keys(data.FAQ.Questions.Workflow)) {
    var subItems = []; 
    subItems.push(<p className="card"><li >{data.FAQ.Questions.Workflow[index].Description}</li></p>)   
    items.push(<Link href={data.FAQ.Questions.Workflow[index].Link}><a className="card"> {subItems}</a></Link>)
  }  

  items.push(<h2>  PrPro : bugs and troubles</h2>)
  for (const index  of Object.keys(data.FAQ.Questions.PrProBugsAndTroubles)) {
    var subItems = []; 
    subItems.push(<p className="card"><li >{data.FAQ.Questions.PrProBugsAndTroubles[index].Description}</li></p>)   
    items.push(<Link href={data.FAQ.Questions.PrProBugsAndTroubles[index].Link}><a className="card"> {subItems}</a></Link>)
  }
  items.push(<h2>  PrPro / AME Image rendering</h2>)
  for (const index  of Object.keys(data.FAQ.Questions.PrProAmeImage)) {
    var subItems = []; 
    subItems.push(<p className="card"><li >{data.FAQ.Questions.PrProAmeImage[index].Description}</li></p>)   
    items.push(<Link href={data.FAQ.Questions.PrProAmeImage[index].Link}><a className="card"> {subItems}</a></Link>)
  }
  items.push(<h2>  PrPro BRAW Studio Panel</h2>)
  for (const index  of Object.keys(data.FAQ.Questions.PrProBrawStudio)) {
    var subItems = []; 
    subItems.push(<p className="card"><li >{data.FAQ.Questions.PrProBrawStudio[index].Description}</li></p>)   
    items.push(<Link href={data.FAQ.Questions.PrProBrawStudio[index].Link}><a className="card"> {subItems}</a></Link>)
  }
  items.push(<h2> After Effects Image rendering</h2>)
  for (const index  of Object.keys(data.FAQ.Questions.AfterEffectsImage)) {
    var subItems = []; 
    subItems.push(<p className="card"><li >{data.FAQ.Questions.AfterEffectsImage[index].Description}</li></p>)   
    items.push(<Link href={data.FAQ.Questions.AfterEffectsImage[index].Link}><a className="card"> {subItems}</a></Link>)
  }
  items.push(<h2> Shooting BRAW</h2>)
  for (const index  of Object.keys(data.FAQ.Questions.ShootingBraw)) {
    var subItems = []; 
    subItems.push(<p className="card"><li >{data.FAQ.Questions.ShootingBraw[index].Description}</li></p>)   
    items.push(<Link href={data.FAQ.Questions.ShootingBraw[index].Link}><a className="card"> {subItems}</a></Link>)
  }
  return (
    <div className="grid">
      <h2> FAQ </h2>
       {items}
    </div>
  )

}
//function that write the Documentation to HTML
export function writeArticles(){
  const items = [];
  for (const index  of Object.keys(data.Articles)) {
    var subItems = [];
    subItems.push(<li >{data.Articles[index].Description}<p className="card">{data.Articles[index].AnchorDisc}</p></li>)   

    items.push(<Link href={data.Articles[index].Link}><a className="card">{subItems}</a></Link>)

  }
  return (
    <div className="grid">
      <h2> Articles </h2>
       {items}
    </div>
  )
}

export default function Documentation() {

    return (
      <Layout> 
      
      <main>
      <h1 className="title">
        Documentation  
      </h1>
 
      <div className="grid">
      <h3>

      <p className="card">First you have this  to guide you through BRAW Studio.
      <Link href="https://www.youtube.com/watch?v=EQxg2xCxQRo">
        <p className="card"> YouTube Quick Start Tutorial</p>
      </Link>
      </p>
       
      <p className="card">We also have the following articles / tutorials and a FAQ 
      <Link href="https://www.youtube.com/watch?v=w4REl_U8K6c">
        <p className="card">Youtube tutorial for the Premiere Pro Source Settings Panel.</p>
      </Link>
      </p>

       </h3>
      {writeDocumentations()}
      </div>
   
      <div className="grid">
      {writeFAQ()}
      </div>
      <div className="grid">
      {writeArticles()}
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
  
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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



