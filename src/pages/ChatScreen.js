import Avatar from '@material-ui/core/Avatar'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledChatScreen = styled.div`
  .chatScreen__timestamp {
    text-align: center;
    padding: 20px;
    color: gray;
  }
  .chatScreen__message {
    display: flex;
    align-items: center;
    padding: 20px;
  }
  .chatScreen__text {
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
  }
  .chatScreen__textUser {
    margin-left: auto;
    background-color: #29b3cd;
    padding: 15px;
    border-radius: 20px;
    color: white;
  }
  .chatScreen__input {
    display: flex;
    padding: 5px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgray;
  }
  .chatScreen__inputField {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
  }
  .chatScreen__inputButton {
    border: none;
    margin-right: 20px;
    background-color: white;
    font-weight: bolder;
    color: #fe3d71;
    outline: none;
  }
`

function ChatScreen() {
  const [input, setInput] = useState()
  const [messages, setMessages] = useState([
    {
      name: 'Luong Quy Tan',
      image: '...',
      message: "What's up",
    },
    {
      name: 'Nguyen Ngoc Nhu Quynh',
      image: '...',
      message: 'Hows it going',
    },
    {
      image: '...',
      message: 'Hows it going',
    },
  ])
  const handleSend = (e) => {
    e.preventDefault()
    setMessages([...messages, { message: input }])
    setInput('')
  }
  return (
    <StyledChatScreen>
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message" key={message.name}>
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key="1">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        ),
      )}
      <div>
        <form className="chatScreen__input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="chatScreen__inputField"
          />
          <button
            type="submit"
            onClick={handleSend}
            className="chatScreen__inputButton">
            SEND
          </button>
        </form>
      </div>
    </StyledChatScreen>
  )
}

export default ChatScreen
