import { motion } from "framer-motion";
import InputLabel from "../inputlabel";
import InputField from "../textField";



const RegInputs = ({currentView}) => {

    const groupDelay = .5

    return (
        <div className=" w-full h-full flex flex-col justify-end absolute">

            <motion.div className="relative"
            initial={{right:'-100%'}}
            animate={{
                right:!currentView? '-100%':0
            }}
            transition={{
                delay:!currentView? .1:groupDelay+.1
            }}
            >
                <InputLabel
                style={{marginTop:'20px'}}
                label={'Username'}
                />
                <InputField
                style={{marginTop:'20px'}}
                />
            </motion.div>
            
            
            <motion.div className="relative"
            initial={{right:'-100%'}}
            animate={{
                right:!currentView? '-100%':0
            }}
            transition={{
                delay:!currentView? .2:groupDelay+.2
            }}
            >
                <InputLabel
                style={{marginTop:'20px'}}
                label={'Password'}
                />
                <InputField fieldType="password" />
            </motion.div>

            <motion.div className="relative"
            initial={{right:'-100%'}}
            animate={{
                right:!currentView? '-100%':0
            }}
            transition={{
                delay:!currentView? .3:groupDelay+.3
            }}
            >
                <InputLabel
                style={{marginTop:'20px'}}
                label={'Password'}
                />
                <InputField fieldType="password" />
            </motion.div>
            
        </div>
    );
}
 
export default RegInputs;