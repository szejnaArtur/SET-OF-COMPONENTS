import classes from './login-and-registration-form.module.css';
import {useEffect, useState} from "react";

const LoginAndRegistrationForm = () => {

    const [isActive, setIsActive] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return (
        <div className={classes.content} style={isActive ? {background: '#03a9f4'} : {background: '#f43648'}}>
            <div className={classes.container}>
                <div className={classes.blueBg}>
                    <div className={classes.box}>
                        <h2>Already Have an Account ?</h2>
                        <button onClick={() => setIsActive(prevState => !prevState)}>
                            Sign in
                        </button>
                    </div>
                    <div className={classes.box} style={width < 992 ? {top: '0'} : {}}>
                        <h2>Don't Have an Account ?</h2>
                        <button onClick={() => setIsActive(prevState => !prevState)}>
                            Sign up
                        </button>
                    </div>
                </div>
                <div className={classes.formBx} style={
                    !isActive ? width < 992 ? {top: '150px'} : {top: 0} : width > 992 ? {left: '50%'} : {left: 0}
                }>
                    <div className={classes.form} style={isActive ? {left: '-100%', transitionDelay: '0'} : {
                        left: '0',
                        transitionDelay: '0.25s'
                    }}>
                        <form>
                            <h3>Sign In</h3>
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                            <input type="submit" value="Login" className={classes.btnLeft}/>
                            <a href='#' className={classes.forgot}>Forgot Password</a>
                        </form>
                    </div>

                    <div className={classes.form} style={isActive ? {left: '0', transitionDelay: '0.25s'} : {
                        left: '100%',
                        transitionDelay: '0'
                    }}>
                        <form>
                            <h3>Sign Up</h3>
                            <input type="text" placeholder="Username"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <input type="password" placeholder="Confirm Password"/>
                            <input type="submit" value="Login" className={classes.btnRight}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginAndRegistrationForm;