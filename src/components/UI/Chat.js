import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const StyledChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  .chat__image {
    margin-right: 20px;
  }
  .chat__details {
    flex: 1;
  }
  .chat__details > p {
    color: gray;
  }
  .chat__timestamp {
    color: lightgray;
  }
`

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <StyledChat>
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </StyledChat>
    </Link>
  )
}

Chat.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
}

export default Chat
