import React, {useState, useEffect} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

/*var welcome = "Welcome to my App!"
function setWelcome) {
    welcome = "Start with sending a message.";
    document.querySelector("#welcome").innerText = welcome;
}*/

const ChatPage = ({}) => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg, setMsg] = useState("Please type something!");
    const [resp, setResp] = useState("Let me respond to you!");
    const [color, setColor] = useState("#ad2b2b");
    const [text, setText] = useState("delete")

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#chatpage").style.left = 0;
        }, 5)
    }, []);

    return <div id="chatpage">
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.")
        }}>
            <Chat backgroundColor={"#b1c3e0"} name={"User 1"} msg={msg}/>
            <p />
            <Chat img={"https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"} name={"chat bot"} msg={resp}/>
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                /*if(val === "hi") {
                    setResp("I love pie");
                }*/
            }}/>
        </div>
        <div id="custom_btn">
            <CustomButton onClick={()=>{
                setColor("#2b825f");
                setText("are you sure?");
            }}text={text} color={color} />
        </div>
        {/*
            when button is clicked, setColor to another colour and setText to another text
        </div> */}
    </div>
}

function CheckResponse(inp) {
    switch(inp.toLowerCase()) {
        case "hi":
            return "I love pie";
        case "how are you?":
            return "great!";
        
        default:
            return "I don't understand what you are tyrying to say";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;