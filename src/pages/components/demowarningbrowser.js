import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {FaExclamation} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';


const DemoWarningBrowser = ({
    lock,setLock,
    open,setOpen,mobile
}) => {
    

    return (
        <div className="w-1/2 h-full ml-4  ">
            <motion.div className=" relative top-0 bg-red-500 rounded-md
            shadow-type-2 flex items-center justify-center
            "
            style={{
                height:'30px',
                width:'30px',
            }}
            whileHover={{rotate:!open&&!lock ? '-15deg':'0deg'}}
            initial={{
                borderRadius:'40px'
            }}

            animate={{
                height:(open&&(!mobile))? '100%':'30px',
                width:(open&&(!mobile))? '100%':'30px',
                borderRadius:'8px'
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
                            initial={{opacity:0}}
                            animate={{
                                opacity:open? 
                                        mobile? 0:1
                                        :0
                            }}
                            >
                                <AiOutlineClose 
                                size={15}
                                color='white'
                                />
                            </motion.div>

                        
                            <motion.div className="absolute"
                            initial={{opacity:1}}
                            animate={{
                                opacity:!open? 1:
                                mobile? 1:0
                            }}
                            >
                                <FaExclamation 
                                size={10}
                                color='white'
                                />
                            </motion.div>
                                
                        
                    </div>
                </div>

                {
                    !mobile &&
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
                }
                


            </motion.div>
        </div>
    );
}
 
export default DemoWarningBrowser;