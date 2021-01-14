import Layout from '../../components/layout'
import React from 'react' 
import Link from 'next/link'
import '../../styles/Home.module.css'
import data from '../../components/StaticDb/download.json'

    
//function that write the Download to HTML
export function writeDownload(){
  const items = [];

  for (const index  of Object.keys(data.Download)) {
    var subItems = [];
    subItems.push(<p >{data.Download[index].Description}</p>)   

    items.push(<Link href={data.Download[index].Link}><a className="card"> {subItems}</a></Link>)

  }

  return (
    <div className="card">
       <h2 > Download </h2>
       {items}
    </div>
  )

}

//function that write the Chanelog to HTML
export function writeChanelog(){
  const items = [];

  for (const index  of Object.keys(data.Chanelog)) {
    var subItems = [];
    subItems.push(<p><h3>Version : {data.Chanelog[index].Version} Date : {data.Chanelog[index].Date}</h3>{data.Chanelog[index].description}</p>);   

    items.push(<a className="card"> {subItems}</a>);

  }

  return (
    
    <div className="grid">
        {items}
    </div>
  )

}
//function that write the Versions to HTML
export function writeVersions(){
  const items = [];

  for (const index  of Object.keys(data.Versions)) {
    var subItems = [];
    subItems.push(<a className="card"><h3>Version: {data.Versions[index].Version} - Date: {data.Versions[index].Date}</h3></a>);   

    //write line description
    for (const jndex  of Object.keys(data.Versions[index].Lines)) {
    subItems.push(<h4><li>{data.Versions[index].Lines[jndex].Description}</li></h4>);

      //write line description
     if(data.Versions[index].Lines[jndex].Lines !== undefined)
      for (const xindex  of Object.keys(data.Versions[index].Lines[jndex].Lines)) {
        subItems.push(<p><li>{data.Versions[index].Lines[jndex].Lines[xindex].Description}</li></p>);
      }
      
    }
    items.push(<div className="grid"> {subItems}</div>);

  }

  return (
    
    <div className="container">
        {items}
    </div>
  )

}

//TODO - end
export default function Download() {
  return (

    <Layout> 
    <div className="container">
    <main className="grid">
    <h1 className="title">
      Autokroma  
      <Link href="https://dl.autokroma.com/AfterCodecs_v1.9.9_Windows_Installer.zip">
      <a> AfterCodecs Download</a>
      </Link>
    </h1>
    <div className="grid">
    {writeDownload()}
    </div>

   <h2 className="title">
         Chanelog 
    </h2>
    <div className="grid">
 
    {writeChanelog()} 
    <div className="grid">
      <h2> Versions </h2>
      {writeVersions()}

    </div>
      
    </div>
  </main>
  </div>
  <style jsx>{`
      main {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 75px;
        text-transform: none;
        font-family: 'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
      }
      conteiner {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
      }
        li{
          padding-left: 16px;
          content: "•"; /* Insert content that looks like bullets */
          padding-right: 15px;
          color: blue; /* Or a color you prefer */
        }
       
        .grid-container {
          display: grid;
          height: 400px;
          align-content: end;
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
