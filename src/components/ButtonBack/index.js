import {useHistory} from "react-router-dom";

const ButtonBack = () =>{
    const history = useHistory()
    const Back = () =>{
        history.goBack()
    }
    return(
        <button className='back-btn' onClick={Back}> &laquo; Go back</button>
    )
}
export default ButtonBack