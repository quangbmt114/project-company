import '../Home/home.css'
import Group1_Img from '../Home/images/group1.png'
import Group2_Img from '../Home/images/group2.png'
import HandShake_Img from '../Home/images/handshake3.png'
import Medal_Img from '../Home/images/medal3.png'
import Link1 from '../Home/images/link1.png'
import Management_Img from '../Home/images/management.png'
import OutSourcing_Img from '../Home/images/outsourcing.png'
import Shield_Img from '../Home/images/shield.png'

function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="background-banner py-5">
                    <div className='row'>
                        <div className="content">
                            <h5 className='title1 fw-bold'>How to Start</h5>
                            <h2 className='fw-bold' style={{ color: "#16205F" }}>Easy Process</h2>
                            <div className='paragraph'>
                                <p>
                                    We specialize in helping you build a team of expert developers, testers, and leaders.
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className='row'>
                        <div className='content-layout d-flex justify-content-center align-items-center flex-wrap'>
                            <div className='col-6 col-md-3'>
                                <img src={Group1_Img} alt='' className='img-fluid' />
                                <p>01 YOU ASK</p>
                            </div>
                            <div className='col-6 col-md-3'>
                                <img src={Group2_Img} alt='' className='img-fluid' />
                                <p>02 WE PROCEED</p>
                            </div>
                            <div className='col-6 col-md-3'>
                                <img src={HandShake_Img} alt='' className='img-fluid' />
                                <p>03 Negotiate</p>
                            </div>
                            <div className='col-6 col-md-3'>
                                <img src={Medal_Img} alt='' className='img-fluid' />
                                <p>04 YOU GET</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='heading1'>
                    <h4>Expertise</h4>
                </div>
                <div className='heading2'>
                    <h2 className='title'>Hire Permanent and Remote Developers</h2>
                </div>
                <div className='paragraph2'>
                    <h2 className='para'>
                        From full-time remote engineering teams to hourly contractors, work with remote devs as needed
                    </h2>
                </div>

                <div className='row py-5 layout'>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={Link1} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Dedicated Teams</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>Find your next team member</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={Management_Img} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Dedicated Teams</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>Find your next team member</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={OutSourcing_Img} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Dedicated Teams</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>Find your next team member</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={Shield_Img} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Dedicated Teams</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>Find your next team member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;