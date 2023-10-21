
import { motion } from 'framer-motion';
import {AiFillGithub} from 'react-icons/ai';

const GitHubSignin = () => {
    return (
        <motion.div className="full flex flex-1 ml-2 rounded-lg items-center justify-center bg-gray-600 cursor-pointer
        shadow-type-2
        "
        whileHover={{translateY:-10}}
        >
            
            <div className='w-5/6 h-5/6  font-primary'>

                <div className='w-full h-1/2 flex items-center justify-center '>
                    <AiFillGithub size={50} color='white' />
                </div>
                <div className='flex justify-center text-white mt-4 text-2xl'
                >
                    GitHub
                </div>

            </div>

        </motion.div>
    );
}
 
export default GitHubSignin;