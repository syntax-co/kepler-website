import { AnimatePresence, motion } from "framer-motion";
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";


import RegToggle from "./regToggle";
import RegSign from "./regsign";
import LoadingComp from "./loadingcomp"; 




const Demo = ({openDemo,setOpenDemo}) => {
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(false)
    

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setOpenDemo(false);
        }, 3000);

        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }


    return (
        <motion.div className="demo-main-body"
        initial={{right:'-100%'}}
        animate={{
            right:openDemo? '0%':'-100%'
        }}
        transition={{
            duration:.6
        }}
        >

            <div className="w-full h-full">
                <div className="w-full h-[10%] flex items-center justify-center  relative">
                </div>
            
                <div className="w-full h-[92%] flex justify-center">
                    <div className="w-[90%] h-5/6 relative">
                        <RegToggle
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        />

                        <RegSign 
                        currentView={currentPage}
                        handleSubmit={handleSubmit}
                        />
                        
                        <AnimatePresence mode="wait" >

                            {
                                loading &&
                                <motion.div className="h-full w-full absolute z-10 top-0 bg-color-5 rounded-lg"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                exit={{opacity:0}}
                                >
                                    <LoadingComp />
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
                
            </div>

            


        </motion.div>
    );
}
 
export default Demo;