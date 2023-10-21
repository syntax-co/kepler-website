import { motion } from 'framer-motion';
import { useState } from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import { BiHide, BiShow } from 'react-icons/bi';
import {MdPassword} from 'react-icons/md';


const ShowHide = ({showPassword,setShowPassword,color='white'}) => {

    


    return(
        <div className='w-10 h-full relative flex items-center justify-center cursor-pointer'
        
        
        onClick={() => {
            setShowPassword(!showPassword)
        }}

        >
            
            <motion.div className='absolute'
            initial={{
                opacity:0,
            }}
            animate={{
                opacity: showPassword? 1:0,
            }}
            >
                <BiHide size={20} color={color}/>
            </motion.div>
            <motion.div className='absolute'
            initial={{
                opacity:1,
            }}
            animate={{
                opacity: showPassword? 0:1,
            }}
            >
                <BiShow size={20} color={color}/>
            </motion.div>

        </div>
    )
}


const InputField = ({fieldType='username'}) => {
    

    const color =  '#f9b4ab'
    
    const [showPassword,setShowPassword] = useState(false);
    
    return (  
        <div className="w-full h-10 flex items-center justify-center">
            <div className="w-4/6 h-full  flex rounded-lg bg-color-3 shadow-type-2">
                <div className="w-10 h-full flex items-center justify-center ">
                    {
                        fieldType == 'username'?
                        <AiOutlineUser size={20} color={color} />:
                        fieldType == 'password'?
                        <MdPassword size={20} color={color} />:''
                    }    
                </div>
                <div className=' h-full flex-1 bg-white'>
                    <input className="w-full h-full mx-2 flex flex-1 text-color-3"
                    type={
                        fieldType=='username'?
                        'text':
                        fieldType=='password'&&
                        showPassword? 'text':'password'
                    }
                    >
                    </input>
                </div>
                {
                    fieldType == 'password' ?
                    <ShowHide
                    showPassword={showPassword}
                    setShowPassword={setShowPassword} 
                    color={color}
                    />:
                    <div className='w-10'>

                    </div>
                }

            </div>
        </div>
    );
}
 
export default InputField;