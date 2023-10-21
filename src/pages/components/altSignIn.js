
import GoogleSignin from "./altSignIns/googleSignin";
import GitHubSignin from "./altSignIns/githubSignin";

const AltSignIns = () => {
    return (
        <div className="alt-sign-body">

            <div className="w-5/6  flex">

                <GoogleSignin />
                <GitHubSignin />

            </div>

        </div>
    );
}
 
export default AltSignIns;