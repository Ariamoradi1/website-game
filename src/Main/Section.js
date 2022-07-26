import './Section.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

function Section() {
    return(


    <div className="Games">

<div className="Game1">

    <div className='infoGame1'>

    <img src='callofmobile.jpg' alt='callof'/>

    <h2>call of duty mobile</h2>

    <p>call of duty is a warior game for gamers Survive if you can! </p>
    < FontAwesomeIcon className='faDownload' icon={faDownload}><p>call of duty is a warior game for gamers Survive if you can! </p></FontAwesomeIcon>

     </div>

</div>
    <div className="game2">

        <div className='infoGame2'>

        <img src='clashofclans.png' alt='clash'/>

        <h2>clash of clans</h2>

        <p>customize your village, bulid an army  and crush your opponents</p>
        <FontAwesomeIcon className='clashDownload' icon={faDownload}></FontAwesomeIcon>


        </div>





    </div>

    <div className="game3">

        <div className='infoGame3'>

        <img src='pubgm.jpg' alt='pubg'/>

        <h2>pubg mobile!</h2>

        <p>PUBG is a player versus player shooter game in which up to one hundred players fight in a battle royale,</p>

        <FontAwesomeIcon className='pubgDownload' icon={faDownload}></FontAwesomeIcon>
        </div>


    </div>
    

    <div className="game4">

    <div className='infoGame4'>

<img src='pes22.jpg' alt='pes'/>

<h2>pes mobile!</h2>

<p>PES Mobile is a soccer game..choose your legend team and enjoy</p>

<FontAwesomeIcon className='pubgDownload' icon={faDownload}></FontAwesomeIcon>
</div>

        


    </div>

    <div className="game5">

    <div className='infoGame5'>

<img src='fort.jpg' alt='pes'/>

<h2>fortnite mobile!</h2>

<p>fornite mobile is bes game of mobile platform...connect and play with friends</p>

<FontAwesomeIcon className='pubgDownload' icon={faDownload}></FontAwesomeIcon>
</div>


    </div>

    <div className="game6">

    <div className='infoGame5'>

<img src='asphalt9.jpg' alt='pes'/>

<h2>asphalt9 mobile!</h2>

<p>asphalt0 mobile is reacing game ...play online and enjoy your time! </p>

<FontAwesomeIcon className='pubgDownload' icon={faDownload}></FontAwesomeIcon>
</div>



    </div>

    <div className='more-game'>

    <a href='#'><h1>click to show more game...</h1></a>

     


    </div>




</div>





    











    );
    
}

export default Section;