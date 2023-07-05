import "../Technologies/style.css"
function Technologies() {
    return (
        <>
            <div className="hero-banner-technologies">
                <div className="technologies-banner">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                            <h1 className="title mb-3 fw-bold">Technologies</h1>
                            <p className="content">We specialize in helping you build a team of expert developers.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5">
                <div className="row" style={{color: "#16205F"}}>
                    <div className="col col-md-4 text-start">
                        <h1 className="fw-bold">Technologies</h1>
                        <p>Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity</p>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col">
                        <div className="btn-group">
                            <button className="btn btn-light" style={{backgroundColor: "#FFF856"}}>All</button>
                            <button className="btn btn-light">Frontend</button>
                            <button className="btn btn-light">Backend</button>
                            <button className="btn btn-light">Frameworks</button>
                            <button className="btn btn-light">Mobile App</button>
                            <button className="btn btn-light">DataBase</button> 
                            <button className="btn btn-light">Google</button>
                            <button className="btn btn-light">Data Science</button>
                            <button className="btn btn-light">Machine Learning</button>
                            <button className="btn btn-light">DevOps</button>
                            <button className="btn btn-light">CMS</button>
                            <button className="btn btn-light">ECommerce</button>
                            <button className="btn btn-light">Security</button>
                        </div>
                    </div>
                </div>
            </div>
        </> 
        );
}

export default Technologies ;