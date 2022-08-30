import Link from "next/link";
import styled from "styled-components";
import url from "../utils/url";

export default function ChatBot() {
  return (
    <ChatBotLayout>
      <TextButton>챗봇에게 물어보기</TextButton>
      <img
        src="/asset/images/Chatbot_Icon.svg"
        alt="chatbot"
        onClick={() => window.open(url.chatbot)}
        onKeyUp={() => window.open(url.chatbot)}
      />
    </ChatBotLayout>
  );
}

const ChatBotLayout = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  z-index: 999;
  :hover {
    button {
      display: flex;
    }
  }
`;
const TextButton = styled.button`
  width: 91px;
  height: 23px;
  align-items: center;
  justify-content: center;
  display: none;
  position: absolute;
  background: #555d81;
  box-shadow: 3px 3px 7px -1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  border-radius: 13px;
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: -0.55px;
  bottom: 0px;
  right: 78px;
`;
