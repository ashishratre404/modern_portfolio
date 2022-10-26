import React from 'react';


const About = () =>{
    return(
        <>
            <main className='container'>
                <section className="about">
                    <h1 className='section_heading'>About</h1>
                
                    <div className='content'>
                        <div className='left'>
                            <h2>I'm Ashsih Ratre</h2>
                            <p>A final year undergrad at DY Patil International University, Pune. 
                            An enthusiastic student with highly motivated and leadership quality exploring Computer Science 
                            and trying hand on new technologies. </p>
                            <button><a href='https://drive.google.com/file/d/1t_64X6SqzdeORj6ahacCre0bOLR8G8Kc/view?usp=sharing' target="_blank" rel="noopener noreferrer">Download CV</a></button>
                        </div>
                        <div className='right'>
                            <p><span>Name</span> <span>Ashish Ratre</span></p>
                            <p><span>Date Of Birth</span> <span>21 March 2000</span></p>
                            <p><span>Spoken Language</span> <span>English-Hindi</span></p>
                            <p><span>Nationality</span> <span>India</span></p>
                            <p><span>Interest</span> <span>Coding, Video Games</span></p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default About;