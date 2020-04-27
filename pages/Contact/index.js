import {useState, useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css'

var index = 0;
const headers_arr = [
    "Thanks for Contacting Me!",
    "Goodbye!",
    "Let me know if you have other questions!"
    /*{
        text:"whatever the text is",
        img:"http://img.jpg"
    }*/
]

const Contact = () => {
    //step one: create state variavle and the function to update it, and put a default inside
    const [header_text, setHeader] = useState("Contact Me!");
    //const [img_url, setImg] = useState("");
    const [pageleft, setLeft] = useState("-100%");
    //const [index, setIndex] = useState(0);

    useEffect(()=>{
        //what to do when it is created / born / the beginning of its life cyctle
        setTimeout(()=>{
            // document.querySelector("#contactpage").style.left = 0;
            setLeft(0);
        }, 5);

        return ()=>{
            //what to do when the compenent ends
        }
    }, []);

    useEffect(()=>{
        //what to do when it is created / born / the beginning of its life cycle
    }, []);

    useEffect(()=>{
        //what to do when a state in the page / component updates
        setLeft(20);
        setTimeout(()=>{
            setLeft(0);
        }, 500);
    }, [header_text]);

//step 2: connect the state variable to the ui
return <div id="contactpage" style={{left:pageleft}}>
    <Header text={header_text} fontSize={24} />
    {
        /*<img src={img_url} />*/
    }
    <CustomButton text='email' onClick={()=>{
        //step 3: connect the state function() to an interaction / figure out when you want to update the interface
        setHeader(headers_arr[index]);
        //setImg(headers_arr[index].img);
        index++;
        if(index > headers_arr.lenggth-1){
            index = 0;
        }
        //setLeft("25%");
    }}/>
</div>
}

export default Contact;