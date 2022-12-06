import classes from './button-share.module.css';
import {
    FaFacebook,
    FaInstagram,
    FaShareAlt,
    FaYoutube} from 'react-icons/fa';
import {useState} from "react";

const ButtonShare = () => {

    const [clicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(prevState => !prevState);
    }

    return (
        <div className={classes.btn}>
            <div onClick={handleClicked}>
                <FaShareAlt className={classes.icon}/>
            </div>
            <div onClick={handleClicked} className={clicked && classes.showFirstBtn}><FaYoutube/></div>
            <div onClick={handleClicked} className={clicked && classes.showSecondBtn}><FaInstagram/></div>
            <div onClick={handleClicked} className={clicked && classes.showThirdBtn}><FaFacebook/></div>
        </div>
    )
}

export default ButtonShare;