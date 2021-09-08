import {useHistory} from "react-router-dom";
import back from '../Image/left-arrow.svg'

const ButtonBack = () =>{
    const history = useHistory()
    const Back = () =>{
        history.goBack()
    }
    return(
        <button className='back-btn' onClick={Back}><img className='backk' src={back} alt=""/></button>
    )
}
export default ButtonBack;