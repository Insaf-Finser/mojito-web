import { useGSAP } from "@gsap/react"
import { featureLists, goodLists } from "../../constants/index"
import { useMediaQuery } from "react-responsive"
import gsap from "gsap";

const Art = () =>{

    const isMobile = useMediaQuery({maxWidth:767});

    useGSAP(()=>{
        const start = isMobile ? 'top 20%':'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#art',
                start,
                end:'bottom center',
                scrub:1.5,
                pin:true
            }
        })

        maskTimeline
            .to('.will-fade',{
                opacity:0,
                stagger:0.5,
                ease:'power1.inOut'
            })
            .fromTo('.masked-img',{
                maskSize: getComputedStyle(document.querySelector('.masked-img')).maskSize
            },{
                scale:1.3,
                maskPosition:'center',
                maskSize:'400%',
                duration:3,
                ease:'power1.inOut'
            })
            .to('#masked-content',{
                opacity:1,
                duration:1,
                ease:'power1.inOut'
            })
            .to('#cup',{
                scale:1,
                opacity:1,
                duration:1,
                ease:'power1.inOut',
                scrollTrigger:{
                    trigger:'#cup',
                    start:'top center'
                },
                scrub:true,
            })
    })

    return(
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade"> THE ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((list,index)=>(
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p>{list}</p>
                            </li>
                        ))}
                    </ul>
                    <img src="/images/cup-2.png" alt="cup" id='cup' className="left-15 absolute top-40 size-50 hidden md:block opacity-0 scale-0"/>
                    <div className="cocktail-img">
                        <img 
                        src="/images/under-img.jpg" 
                        alt="cocktail" 
                        className="abs-center masked-img size-full object-contain" 
                        />
                    </div>
                    <img src="/images/cup-2.png" alt="cup" id='cup' className="right-15 absolute bottom-50 size-50 hidden md:block opacity-0 scale-0"/>
                    <ul className="space-y-4 will-fade">
                        {featureLists.map((list,index)=>(
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p className="md:w-fit w-60" >{list}</p>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>

            </div>
        </div>
    )
    
} 

export default Art