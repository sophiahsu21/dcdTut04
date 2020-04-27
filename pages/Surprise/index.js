import {useEffect} from 'react';
import Link from 'next/link';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './surprise.css';
import {FaSadCry} from 'react-icons/fa';

const Surprise = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#surprisepage").style.right = 0;
        }, 100)
    }, []);

return <div id="surprisepage">
    <Header text="This is a "   fontSize={24} />
    <img src="https://scrip.pharmaintelligence.informa.com/-/media/editorial/scrip/2020/01/sc2001_surpriseconfetti_313945592_1200.jpg" />
    <p><FaSadCry /> sorry, this is incredibly lame.</p>
    <Link href="./"><CustomButton text='home' /></Link>
</div>
}

export default Surprise;