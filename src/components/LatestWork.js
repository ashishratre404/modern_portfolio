import React, {useState} from 'react';
import Sample from '../Datas/Sample';

const LatestWork = () => {

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
                <section className='latest_work'>
                    <h1 className='section_heading'>Portfolio</h1>
                    <div className='wrapper'>
                        <div className='portfolio'>
                            <div className='tabs'>
                                <ul>
                                    <li onClick={() => toggletab(1)} className={activeTab === 1 && 'active'}>Ltest Projects</li>
                                    <li onClick={() => toggletab(2, 'website')} className={activeTab === 2 && 'active'}>All Projects</li>
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
                            
                            </div>
                        </div> 
                    </div>
                </section>
            </main>
        </>
    )
}
export default LatestWork;