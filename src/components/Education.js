import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const Education = () =>{
    return(
        <>
            <main className='container'>
                <section className='skills'>
                    <h1 className="section_heading"> Education and Skills</h1>
                    <div className='content'>
                        <div className='left'>
                            <div className='education'>
                                <div className='heading'>
                                    <SchoolIcon style={{fontSize:'4rem', color:'#060b1b' }} />
                                    <h5>Education</h5>
                                </div>
                                <div className='timeline_wrapper'>
                                    <div className='item'>
                                        <p>2019 - Present</p>
                                        <p className='center'>B.Tech CSE</p>
                                        <p>DY Patil Internaional University Pune</p>
                                    </div>
                                    <div className='item'>
                                        <p>2017 - 2018</p>
                                        <p className='center'>12th Grade</p>
                                        <p>JNV Korba (C.G.)</p>
                                    </div>
                                </div>
                            </div>
                            <div className='exprience'>
                                <div className='heading'>
                                    <BusinessCenterIcon style={{fontSize:'4rem', color:'#060b1b' }} />
                                    <h5>Exprience</h5>
                                </div>
                                <div className='timeline_wrapper'>
                                    <div className='item'>
                                        <p>Sep 2022 - Present</p>
                                        <p className='center'>Software Development Intern</p>
                                        <p>Guardinex Inc</p>
                                    </div>
                                    <div className='item'>
                                        <p>July 2022 - Sep 2022</p>
                                        <p className='center'>Web Development Intern</p>
                                        <p>CHCT India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='talent_wrap'>
                                <h5>Skills</h5>
                                <div className='talent'>
                                    <div className='wrap'>
                                        <p>Programming Language</p> <p>Python, C++</p>
                                    </div>
                                    <div className='wrap'>
                                        <p>Front End</p> <p>HTML, CSS, Javascript, React, Bootstrap, Sass, Material UI</p>
                                    </div>
                                    <div className='wrap'>
                                        <p>Back End</p> <p> NodeJs, Express Js, PHP, Flask</p>
                                    </div>
                                    <div className='wrap'>
                                        <p>Database</p> <p>MongoDB, MySql, SQLITE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Education;