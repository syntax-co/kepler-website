import { motion } from "framer-motion";
import { useState } from "react";
import {PiSignInDuotone} from 'react-icons/pi';
import Draggable,{DraggableCore} from 'react-draggable';



const SubmitButton = ({handleSubmit}) => {

    const [submitting,setSubmitting] = useState(false);
    const [dragging,setDragging] = useState(false);
    const [position,setPosition] = useState({x:0,y:0});

    
    
    
    const handleMove = (event,data) => {
        const copy = position;
        copy.x = copy.x + data.deltaX;
        
        setPosition(copy);
    }

    const handleEnd = (event,data) => {
        const slider = document.querySelector('#slider').getBoundingClientRect();
        const holder = document.querySelector('#slide-holder').getBoundingClientRect();
        const sliderEnd = slider.x + slider.width;
        const holderEnd = holder.x + holder.width;


        if (sliderEnd == holderEnd) {
            handleSubmit();
            setTimeout(() => {
                setPosition({x:0,y:0})    
            }, 500);
        } else {
            setPosition({x:0,y:0})
        }

    }

    return (
        
        <div className="h-24 flex items-center justify-center mt-5">
            <div className="w-4/6 h-16 bg-color-3 rounded-lg flex items-center justify-center shadow-type-2">
                <div id='slide-holder' className="w-5/6 h-4/6 relative flex"
                >   
                    <Draggable
                    axis="x"
                    bounds={'parent'}
                    position={position}
                    
                    onDrag={handleMove}
                    onStop={handleEnd}
                    >
                        <motion.div id='slider' className="w-1/3 h-full bg-color-1 rounded-md absolute cursor-pointer shadow-type-1
                        flex items-center justify-center
                        "
                        initial={{left:0}}
                        animate={{
                            left:submitting?'66%':
                            dragging? `${position}px`:
                            0
                        }}
                        transition={{
                            ease:'easeOut'
                        }}
                        >
                            
                            <PiSignInDuotone size={30} color={'white'} />
                        </motion.div>
                    </Draggable>
                </div>
            </div>
        </div>
        
    );
}



export default SubmitButton;