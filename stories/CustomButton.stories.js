import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    title: "My comps",
    component: CustomButton,
};

export const MyCustomButton = () => <CustomButton />;

function OkayClick() {
}

export const MyCustomButtonWithOptions = () => <CustomButton
    text="okay"
    color="#7ba69f"
    onClick={OkayClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input
    placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

/*export const PageWithCustomButtons = () => <div>
    <Header
        text="welcome"
        fontSize={40}
        color="#822b2b"
        onMouseOver={WelcomeHover}
    />

    <Header
        text="bienvenue"
        fontSize={35}
        color="#2b5982"
        onMouseOver={BienvenueHover}
    />

    <CustomButton
        text="cancel"
        color="#c9d0d1"
        onClick={CancelClick}
    />
    
    <CustomButton
        text="okay"
        color="#7ba69f"
        onClick={OkayClick}
    />
    
    <CustomButton
        text="submit"
        color="#b8a395"
    />
    
    <CustomButton
        text="menu"
    />
</div>

function CancelClick() {
    alert("cancel");
}

function OkayClick() {
    alert("okay");
}

function WelcomeHover() {
    alert("welcome");
}

function BienvenueHover() {
    alert("bienvenue");
} */