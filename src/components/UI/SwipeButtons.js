import CloseIcon from '@material-ui/icons/Close'
import FavoriteIon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import ReplayIcon from '@material-ui/icons/Replay'
import StarRateIcon from '@material-ui/icons/StarRate'
import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import styled from 'styled-components'

const StyledSwipeButtons = styled.div`
  position: fixed;
  bottom: 10vh;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  .swipeButtons__repeat {
    padding: 3vw;
    color: #f5b748;
  }
  .swipeButtons__left {
    padding: 3vw;
    color: #ec5e6f;
  }
  .swipeButtons__star {
    padding: 3vw;
    color: #62b4f9;
  }
  .swipeButtons__right {
    padding: 3vw;
    color: #76e2b3;
  }
  .swipeButtons__lightning {
    padding: 3vw;
    color: #915dd1;
  }

  && {
    .MuiIconButton-root {
      background-color: white;
      box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3);
    }
  }
`

function SwipeButtons() {
  return (
    <StyledSwipeButtons>
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </StyledSwipeButtons>
  )
}

export default SwipeButtons
