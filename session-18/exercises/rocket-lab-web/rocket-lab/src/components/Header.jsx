import favicon from '../assets/favicon.ico'
import './Header.css'

export const Header = () => {
    return(
        
        <header>
            <section className='img-header'>
            <img src={favicon} className='iconLogo'/>
        {/* <p>hola</p> */}
            </section>
        </header>
        
    )
       
}

