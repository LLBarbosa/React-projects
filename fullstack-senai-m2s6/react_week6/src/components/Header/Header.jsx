import './Header.css';
import logoGuitar from '../../_assets/images/logoGuitar.jpg';

function Header () {

    return (
        <div className='fluid-container'>
            <nav className='container'>
                <div className='logo'>
                <span><img src={logoGuitar}/></span>
               </div>
               <ul>
                <li><a href='#'>Guitarras</a></li>
                <li><a href='#'>Serviços</a></li>
                <li><a href='#'>Contato</a></li>
                                               
               </ul>
            </nav>
          </div>
    
    ) 
    
}

export default Header;