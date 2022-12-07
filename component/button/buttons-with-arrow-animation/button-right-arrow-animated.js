import classes from './button-right-arrow-animated.module.css';
import {BsArrowRight} from 'react-icons/bs'

const ButtonRightArrowAnimated = (props) => {

    return (
        <button className={classes.btn}>
            <p>{props.children}</p>
            <div>
                <BsArrowRight className={classes.icon}/>
            </div>
        </button>
    )
}

export default ButtonRightArrowAnimated;