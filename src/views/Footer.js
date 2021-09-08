import logo from '../components/Image/1280px-Tmdb.new.logo.svg.png'
const Footer = () =>{
    return(
        <div className='footer'>
            <div className='container footer-content'>
                <h4 className='authorship'>© 2021 AIDANA AKMATOVA</h4>
                <img className='footer-logo' src={logo} alt=""/>
            </div>
        </div>
    )
}
export default Footer