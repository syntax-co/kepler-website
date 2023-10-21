

import Line from "./line";
import AltSignIns from "./altSignIn";
import InputLabel from "./inputlabel";
import InputField from "./textField";
import SubmitButton from "./submitbutton";
import { useState } from "react";



const SignInView = ({currentView}) => {
    const [loading,setLoading] = useState(false);

    return (
        <div className=" h-full flex justify-end flex-col  "
                    >

            {/* <div className="h-30 mb-10 flex items-center justify-center">
            </div> */}
            
            <InputLabel
            style={{marginTop:'20px'}}
            >
                Username
            </InputLabel>
            <InputField />

            <InputLabel
            style={{marginTop:'20px'}}
            >
                Password
            </InputLabel>
            <InputField fieldType="password" />

            
            <SubmitButton 
            setLoading={setLoading}
            />


            <Line />

            <AltSignIns  />

        </div>
    );
}
 
export default SignInView;