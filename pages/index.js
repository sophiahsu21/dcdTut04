import Link from 'next/link';
import Router from 'next/router';
import {IoMdContact} from 'react-icons/io';
import {FaTree} from 'react-icons/fa';
import {GiSpikyExplosion} from 'react-icons/gi'
import './index.css'

function ClickIndex() {

    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 500)
}

function ClickWelcome() {

    document.querySelector("#mainapp").style.opacity = 0
    setTimeout(function(){
        Router.push("/Welcome");
    }, 1000)
}

const Index = () => <div id="mainapp">
    
    <div onClick={ClickIndex}>Index</div>
    <Link href="/ChatPage"><button><FaTree color="#ABD" /> Chats!</button></Link>
    <Link href="/Contact"><button><IoMdContact /> Contact Me</button></Link>
    <div onClick={ClickWelcome}>Welcome, glad you are here ʕ•́ᴥ•̀ʔっ</div>
    <Link href="/Surprise"><button><GiSpikyExplosion /> Click for a Surprise!</button></Link>
</div>

export default Index;