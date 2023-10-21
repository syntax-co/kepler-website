import { motion } from "framer-motion";



const  RegToggle = ({currentPage,setCurrentPage}) => {
    return (
        <div className="h-18 flex items-end justify-center font-primary ">

            <div className="w-4/6 h-16 bg-color-3 rounded-lg flex items-center justify-center shadow-type-2">

                <div className="w-5/6 h-4/6 relative flex text-white">
                    

                    <div className="w-1/2 h-full flex items-center justify-center relative z-10">
                        <div className="w-5/6 h-5/6 flex items-center justify-center cursor-pointer"
                        onClick={() => {
                            setCurrentPage(false)
                        }}
                        >
                            Sign-In
                        </div>
                    </div>

                    <div className="w-1/2 h-full flex items-center justify-center relative z-10">
                        <div className="w-5/6 h-5/6 flex items-center justify-center cursor-pointer"
                        onClick={() => {
                            setCurrentPage(true)
                        }}
                        >
                            Register
                        </div>
                    </div>

                    <motion.div className="w-1/2 h-full bg-color-1 rounded-md absolute cursor-pointer shadow-type-1"
                    initial={{left:0}}
                    animate={{
                        left:currentPage? '50%':0
                    }}

                    >
                        <div className="">

                        </div>

                    </motion.div>
                </div>


            </div>

        </div>
    );
}



export default RegToggle;