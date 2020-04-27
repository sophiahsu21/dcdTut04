import Link from 'next/link';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './welcome.css'

const Welcome = () => <div>
    <Header text="Welcome to my app"  fontSize={24} />
    <p>this is a basic one-page app that is still under delevopment.</p>
    <Link href="./"><CustomButton text='home' /></Link>
</div>

export default Welcome;