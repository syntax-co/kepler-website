import { Momentum } from '@uiball/loaders'



const LoadingComp = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Momentum 
            size={40}
            speed={1.1} 
            color="white" 
            />
        </div>
    );
}
 
export default LoadingComp;