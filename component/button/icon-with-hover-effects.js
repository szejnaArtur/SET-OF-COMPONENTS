import classes from './icon-with-hover-effects.module.css';
import {FaHome, FaUser, FaRegCommentDots, FaHeart, FaShoppingCart} from 'react-icons/fa'

const IconWithHoverEffects = (props) => {
    return(
        <ul className={classes.container}>
            <li className={classes.param}>
                <span>
                    <FaHome className={classes.icon}/>
                </span>
                <span className={classes.title}>Home</span>
            </li>
            <li className={classes.param}>
                <span>
                    <FaUser className={classes.icon}/>
                </span>
                <span className={classes.title}>Profile</span>
            </li>
            <li className={classes.param}>
                <span>
                    <FaRegCommentDots className={classes.icon}/>
                </span>
                <span className={classes.title}>Message</span>
            </li>
            <li className={classes.param}>
                <span>
                    <FaHeart className={classes.icon}/>
                </span>
                <span className={classes.title}>Likes</span>
            </li>
            <li className={classes.param}>
                <span>
                    <FaShoppingCart className={classes.icon}/>
                </span>
                <span className={classes.title}>Card</span>
            </li>
        </ul>
    )
}

export default IconWithHoverEffects;