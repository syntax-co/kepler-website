import { motion } from 'framer-motion';
import {AiFillGoogleCircle} from 'react-icons/ai';


const GoogleSignin = () => {
    return (
        <motion.div className="h-full flex flex-1 mr-2 rounded-lg items-center justify-center bg-[#ea4335] cursor-pointer
        shadow-type-2
        "
        whileHover={{translateY:-10}}
        >
            
            <div className='w-5/6 h-5/6  font-primary'>

                <div className='w-full h-1/2 flex items-center justify-center '>
                    <AiFillGoogleCircle size={50} color='white' />
                </div>
                <div className='flex justify-center text-white mt-4 text-2xl'
                >
                    Google
                </div>

            </div>

        </motion.div>
    );
}
 
export default GoogleSignin; 