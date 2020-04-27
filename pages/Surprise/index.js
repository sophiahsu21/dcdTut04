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
    <img src="https://media-exp1.licdn.com/dms/image/C4D12AQGJxqTmdItplQ/article-cover_image-shrink_600_2000/0?e=1587600000&v=beta&t=YZEKJKoRcSaj3eKtxF3gIouAhJKCQ0VbDKuQKPNPfHE" />
    <p><FaSadCry /> sorry, this is incredibly lame.</p>
    <Link href="./"><CustomButton text='home' /></Link>
</div>
}

export default Surprise;