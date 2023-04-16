import React from 'react'


const Card = (props) => {
  return (
    <li>
    <div className="portfolio-card">
      <div className="card-banner img-holder" style={{height:"540",width:"800" }}>
        <img src={props.data.img}  loading="lazy"
          alt="shopdz" className="img-cover"/>
        <a href="#" className="btn-icon" aria-label="More about Website Design for Marketing Agency Startup">
          <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
        </a>
      </div>
      <div className="card-content">
        <span className="chip label-md"> {props.data.tag} </span>
        <h3 className="title-md"> {props.data.name} </h3>
        <p className="card-text">
        {props.data.desc}
        </p>
        <a href={props.data.link} target="_blank" className="btn btn-primary"> {props.data.btn} </a>
      </div>
    </div>
  </li>
  )
}

export default Card