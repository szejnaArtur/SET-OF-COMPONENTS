import classes from './loading-orbits.module.css';

const LoadingOrbits = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.ring}></div>
            <div className={classes.ring}></div>
            <div className={classes.ring}></div>
            <p>Loading...</p>
        </div>
    )
}

export default LoadingOrbits;