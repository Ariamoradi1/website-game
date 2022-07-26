import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';






function Header(){

return(

<div className="container">

    

    <div className='menu'>

        <ul>

<li><FontAwesomeIcon icon={faBars}></FontAwesomeIcon>menu</li>
<li><FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>games</li>
<li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>user</li>
<li><FontAwesomeIcon icon={faCog}></FontAwesomeIcon>setting</li>
<li><FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>about</li>


        </ul>




        </div>
        
        <div className='headPic'>

<img className='photoHead' src='callofduty.jpg' alt='callofduty'/>


        </div>




</div>


);



}

export default Header;