import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css'

const Contact = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#contactpage").style.left = 0;
        }, 5)
    }, []);

return <div id="contactpage">
    <Header text="Contact Me!"  fontSize={24} />
    <CustomButton text='email' />
</div>
}

export default Contact;