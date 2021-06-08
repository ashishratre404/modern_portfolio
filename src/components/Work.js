import React, {useState} from 'react';
import Sample from '../Datas/Sample';

// import Chat from './images/chat.jpg';
// import GK from './images/googlekeep.jpg';
// import weather from './images/weather.jpg';
import worksvg from './Svg/img1.svg';

const Work = () => {

    const [activeTab, setactiveTabe] = useState(1)
    const [workitem, setworkitem] = useState(Sample)

    const toggletab = (index, cat) =>{
        setactiveTabe(index)
        if(index > 1){
            const fileteditem = Sample.filter((samplecategory) => {
                return samplecategory.category === cat
            })
            setworkitem(fileteditem);
        }else{
            setworkitem(Sample)
        }
        
    }

    return(
        <>
            <main className='container'>
                <section className='work'>
                    <h1 className='section_heading'>Portfolio</h1>
                    <div className='wrapper'>
                        <div className='slider'>
                            <div>
                                <img src={worksvg} alt='images' /> 
                            </div>
                        </div>
                        <div className='portfolio'>
                            <div className='tabs'>
                                <ul>
                                    <li onClick={() => toggletab(1)} className={activeTab === 1 && 'active'}>All</li>
                                    <li onClick={() => toggletab(2, 'website')} className={activeTab === 2 && 'active'}>Web Dev</li>
                                    <li onClick={() => toggletab(3, 'python')} className={activeTab === 3 && 'active'}>Python</li>
                                    <li onClick={() => toggletab(4, 'game')} className={activeTab === 4 && 'active'}>Games</li>
                                </ul>
                            </div>
                            <div className='portfolio_wrapper' >
                            
                            {
                                workitem.map((cur) => {
                                    const {id, image, category, link} = cur;
                                    return(
                                        
                                            <div className='item' key={id}>
                                                <a href={link} target={link !== '/' && "_blank"} rel={link !== '/' && "noopener noreferrer"}>
                                                    <img src={image} alt='images' />
                                                </a>
                                            </div>
                                        
                                    )
                                })
                            }

                            {/* <div className='portfolio_wrapper'>
                                <div className='item web'>
                                    <a href='https://latest-weather.herokuapp.com/'>
                                        <img src={weather} alt='Weather' />
                                    </a>
                                </div>
                                <div className='item web'>
                                    <a href='https://ashishratre404.github.io/google-keep-clone/'>
                                        <img src={GK} alt='GoogleKeep' />
                                    </a>
                                </div>
                                <div className='item python'>
                                    <a href='#'>
                                        <img src={weather} alt='shooter' />
                                    </a>
                                </div>
                                <div className='item web'>
                                    <a href='https://chitchat-live-chat-platform.herokuapp.com/'>
                                        <img src= {Chat} alt='Chat' />
                                    </a>
                                </div>
                                <div className='item game'>
                                    <a href='#'>
                                        <img src={weather} alt='rps' />
                                    </a>
                                </div>
                                <div className='item game'>
                                    <a href='#'>
                                        <img src={weather} alt='Web' />
                                    </a>
                                </div>
                            </div>*/}
                            </div>
                        </div> 
                    </div>
                </section>
            </main>
        </>
    )
}
export default Work;