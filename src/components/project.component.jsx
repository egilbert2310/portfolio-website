export default function Project({img_path, title, desc}){
    return(
        <div className="project">
            <img src={img_path} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <button>Github</button>
        </div>
    )
}