export default function MainHeader({jobtitle}){
    return(
        <div className="main-header-container">
        <div className="main-header">
            <h1>Hello, I'm</h1>
            <h2>Eric Gilbert</h2>
            <p>{jobtitle}</p>
        </div>
        </div>
    )
}