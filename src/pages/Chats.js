import React from 'react'
import styled from 'styled-components'
import Chat from '../components/UI/Chat'

const StyledChats = styled.div``

function Chats() {
  return (
    <StyledChats>
      <Chat
        name="Luong Quy Tan"
        message="Hey! How are you"
        timestamp="35 minutes ago"
        profilePic=""
      />
    </StyledChats>
  )
}

export default Chats
