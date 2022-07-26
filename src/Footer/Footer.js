import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera, faGift, faLink, faLinkdin, faMessage, faPaperPlane, faPhone} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(

    <div className='Footer'>

     <ul className='ul-footer'>

     <li> <FontAwesomeIcon className='telegram' icon={faPaperPlane}></FontAwesomeIcon>telegram</li>
     <li> <FontAwesomeIcon className='insta' icon={faCamera}></FontAwesomeIcon>instagram</li>
     <li> <FontAwesomeIcon className='linkdin' icon={faLink}></FontAwesomeIcon>linkdin</li>
     <li> <FontAwesomeIcon className='whatsapp' icon={faMessage}></FontAwesomeIcon>whatsapp</li>
     <li> <FontAwesomeIcon className='git' icon={faGift}></FontAwesomeIcon>gift</li>
     <li> <FontAwesomeIcon className='phone' icon={faPhone}></FontAwesomeIcon>phone 0219445066</li>

    





     </ul>

     <p>about : we are the game website for mobile platforms in iran ... we hope to visit my website an feedback!</p>
     
     
    <p>contact : you can contact us at 0219445066</p>

    <p>Privacy Policy : You will be informed by Cybot about relevant changes concerning the Service.</p>
    
    <p>help : you can connect to support by clicking on this <a href='#'>option!</a></p>

    <p>terms of Service : A terms of service set rules that users must agree to in order to use your website, application, or software program.</p>
        
    </div>




    );
}


export default Footer