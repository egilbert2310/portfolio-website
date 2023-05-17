export default function Project({img, title, desc}){
    return(
        <div className="project">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <button>Github</button>
        </div>
    )
}