


const InputLabel = ({label,style}) => {

    return(
        <div className="w-full flex justify-center text-white font-primary"
        style={style}
        >
            <div className="w-4/6">
                {label}
            </div>
        </div>
    )
}


export default InputLabel;