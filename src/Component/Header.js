import logo from '../assets/logo.png'

function Header() {
    return (
    <div>
        <h1> Notre super site web Cinématographique !  </h1> 
        <img src={logo} alt='monlogo' className='logo' />
        <h2>It's time to duel !</h2>

        
    </div>
    )
}
export default Header