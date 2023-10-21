import { motion } from "framer-motion";
import InputLabel from "../inputlabel";
import InputField from "../textField";




const SigninInputs = ({currentView}) => {
    const groupDelay = .5

    return (
        <div className="w-full h-full absolute">
            <div className=" h-full flex justify-end flex-col  relative"
                    >

                
                <motion.div className="relative"
                initial={{right:!currentView? '-100%':0}}
                animate={{
                    right:currentView? '-100%':0
                }}
                transition={{
                    delay:currentView? .1:groupDelay+.1
                }}
                >
                    <InputLabel
                    style={{marginTop:'20px'}}
                    label={'Username'}
                    />
                    <InputField  />
                </motion.div>

                <motion.div className="relative"
                initial={{right:!currentView? '-100%':0}}
                animate={{
                    right:currentView? '-100%':0
                }}
                transition={{
                    delay:currentView? .2:groupDelay+.2
                }}
                >
                    <InputLabel
                    style={{marginTop:'20px'}}
                    label={'Password'}
                    />
                    <InputField fieldType="password" />
                </motion.div>

            </div>
        </div>
    );
}
 
export default SigninInputs;