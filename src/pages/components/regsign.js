

import Line from "./line";
import AltSignIns from "./altSignIn";
import SubmitButton from "./submitbutton";
import { useEffect, useState } from "react";
import RegInputs from "./reg-signin/reginputs";
import SigninInputs from "./reg-signin/signininputs";


const RegSign = ({currentView,setLoading,handleSubmit}) => {
    
    const [showSignin,setShowSignin] = useState(true);
    const [showRegister,setShowRegister] = useState(false);

    useEffect(() => {
        
        if (!currentView) {
            setTimeout(() => {
                setShowSignin(true);
                setShowRegister(false);
            }, 700);
        } else {
            setTimeout(() => {
                setShowSignin(false);
                setShowRegister(true);
            }, 500);
        }

    }, [currentView]);

    return (
        <div className=" h-full flex justify-end flex-col relative "
                    >

            
            <div className=" flex flex-1  relative">
                {   
                    showSignin&&
                    <SigninInputs currentView={currentView} />
                }
                {
                    showRegister&&
                    <RegInputs currentView={currentView} />
                }
            </div>

            <SubmitButton setLoading={setLoading} handleSubmit={handleSubmit} />
            <Line />

            <AltSignIns  />

        </div>
    );
}
 
export default RegSign;