import img from '../assets/newsimg.jpg';

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 flex-inline-block d-inline-block my-3 mx-3 px-2 py-2" style={{width:"21.6rem",height:"500px"}}>
       
 <img src={src?src:img} style={{height:"240px",width:"20.6rem"}} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,110):"News provides timely information on current events, encompassing diverse topics like politics, economics and entertainment."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem