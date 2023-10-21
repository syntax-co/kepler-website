import { motion, useAnimationControls } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import {CiMenuBurger} from 'react-icons/ci'
import { Twirl as Hamburger } from 'hamburger-react'

import DemoWarningBrowser from "./demowarningbrowser";
import DemoWarningMobile from "./demowarningmobile";

const Title = () => {

    const titleDelay = 1.5
    const animDuration = .5
    
    const [showGroup,setShowGroup] = useState(false);
    const [showTitle,setShowTitle] = useState(false);

    const rotElem = useAnimationControls();
    const topTitle = useAnimationControls();

    
    const hoverOn = () => {
        rotElem.start({
            rotate:'45deg'
        })
    }

    const hoverOff = () => {
        rotElem.start({
            rotate:'65deg'
        })
    }


    const closeTitle = () => {

        setShowGroup(true);
        
        
        setTimeout(() => {
            rotElem.start({
                rotate:'65deg'
            })
        }, 500);

        


    }
    
    useEffect(() => {
        
        setTimeout(() => {
            closeTitle()
        }, (
            (titleDelay*1000)+(animDuration*1000)
            )
        );

    }, []);

    return(
        <div className="title-outer font-display shadow-type-2"
        onMouseEnter={() => {hoverOn()}}
        onMouseLeave={() => {hoverOff()}}
        >


            <div className="title-text-bottom">
                Kepler.io
            </div>

            
            

            
            {/* slide in group */}
            <motion.div className="title-slide-tile"
            initial={{left:'-50%'}}
            animate={{
                left:'0%'
            }}
            transition={{
                delay:titleDelay
            }}
            >
                
                <motion.div className=" absolute text-white overflow-hidden"
                initial={{right:'-220px'}}
                animate={{
                    right:'-100px'
                }}
                transition={{
                    delay:titleDelay
                }}
                >
                    Kepler.io
                </motion.div>

            </motion.div>
            
            <motion.div className="title-slide-tile"
            initial={{right:'-50%'}}
            animate={{
                right:'0%'
            }}
            transition={{
                delay:titleDelay
            }}
            >
                <motion.div className=" absolute text-white overflow-hidden"
                initial={{left:'-220px'}}
                animate={{
                    left:'-100px'
                }}
                transition={{
                    delay:titleDelay
                }}
                >
                    Kepler.io
                </motion.div>
            </motion.div>


            {/* rotating group */}
            
            {
                showGroup && 
                <motion.div className="title-rot-tile" 
                initial={{rotate:'0deg'}}
                animate={rotElem}
                transition={{
                    // delay:titleDelay
                }}
                >
                    <div className="w-1/2 h-full bg-color-4"
                    >
                        
                    </div>
                    <div className="w-1/2 h-full bg-color-3"
                    >
                        
                    </div>
                </motion.div>
            }
            

            {
                showGroup && 
                <motion.div className="absolute"
                animate={topTitle}
                transition={{
                    delay:titleDelay
                }}
                >
                    Kepler.io
                </motion.div>
            }
            



        </div>
    )
}



const Navbar = ({openDemo,setOpenDemo}) => {

    const [hovering,sethovering] = useState(false);
    const [open,setOpen] = useState(true);
    const [lock,setLock] = useState(false);
    const [mobile,setMobile] = useState(false);

    const checkScreenSize = () => {
        
        if (screen.width <= 768) {
            setMobile(true) //true
        } else {
            setMobile(false)
        }

    }

    useEffect(() => {
        checkScreenSize();
    }, []);


    return (
        <div className="navbar-outer">
        
            {
                (mobile&&open)  &&
                <DemoWarningMobile
                lock={lock}
                setLock={setLock}
                open={open}
                setOpen={setOpen}
                />
            }

            <div className="navbar-inner">


                <Title  />

                
                <DemoWarningBrowser
                lock={lock}
                setLock={setLock}
                open={open}
                setOpen={setOpen}
                mobile={mobile}
                />
                


                <motion.div className="h-14 w-14 absolute right-[-60px] rounded-full bg-color-3 shadow-type-2
                flex items-center justify-center cursor-pointer z-20
                "
                initial={{right:0}}
                animate={{
                    right:openDemo? `-3%`:0
                }}

                onMouseEnter={() => {sethovering(true)}}
                onMouseLeave={() => {sethovering(false)}}

                onClick={() => {
                    setOpenDemo(!openDemo);
                }}
                >
                    
                    
                    <Hamburger size={20} toggled={openDemo}  color="white" />
                    
                

                </motion.div>

            </div>
        </div>



    );
}
 
export default Navbar;