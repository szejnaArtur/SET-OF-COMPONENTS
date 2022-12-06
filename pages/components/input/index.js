import InputLabelAnimation from '../../../component/input/input-label-animation';

const Input = () => {
    return (
        <div style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(45deg, #2196f3, #ff4685)',
            boxSizing: 'border-box',
            fontFamily: 'Poppins, sans-serif'
        }}>
            <InputLabelAnimation type={'text'} text={'Full Name'}/>
        </div>
    )
}

export default Input;