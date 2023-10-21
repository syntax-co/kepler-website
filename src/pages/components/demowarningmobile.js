

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {FaExclamation} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';


const DemoWarningMobile = ({
    lock,setLock,
    open,setOpen,mobile
}) => {

    
    

    return (
        <div className="w-screen h-screen flex justify-center bg-[#00000055]  absolute top-0"
        style={{
            zIndex:30
        }}
        >
            <motion.div className=" relative top-0 bg-red-500 rounded-md
            shadow-type-2 flex items-center justify-center w-5/6 h-2/6 mt-5
            "
            initial={{opacity:0}}
            animate={{
                opacity:open? 1:0
            }}
            transition={{
                delay:.5
            }}
            >
                
                <div className="w-full h-full relative flex items-center justify-center"
                >
                    <div className="w-[30px] h-[30px] flex items-center justify-center absolute left-0 top-0
                    cursor-pointer
                    "
                    onClick={() => {
                        if (open) {
                            setOpen(false);
        
                            setTimeout(() => {
                                setLock(false);
                            }, 500);
                        }
                        else {
                            setLock(true)
        
                            setTimeout(() => {
                                setOpen(true)
                            }, 500);
                        }
                    }}
                    >
                            <motion.div className="absolute"
                            >
                                <AiOutlineClose 
                                size={20}
                                color='white'
                                />
                            </motion.div>                        
                    </div>
                </div>


                <AnimatePresence >
                    {
                        open&&
                        <motion.div className="w-[90%] text-md ml-2 absolute text-white font-primary"
                        initial={{opacity:0}}
                        animate={{opacity:1,
                        transition:{
                            delay:.5
                        }
                        }}
                        exit={{opacity:0}}
                        >   
                            This is only a Demo Website and is not an actual library that exists... Yet.
                        </motion.div>
                    }
                </AnimatePresence>


            </motion.div>
        </div>
    );
}
 
export default DemoWarningMobile;