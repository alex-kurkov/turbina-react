import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledTicker = styled.div`
  width: 100%;
  overflow: hidden;
  padding-left: 100%;
  box-sizing: content-box;
`;

const TickerWrap = styled.div`
  @keyframes ticker {
    0% {
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  display: inline-block;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ticker;
`;

const TickerContent = styled.div`
  display: inline-block;
  padding: 0 4px;
`;

export default function Ticker(props) {
  const { children, duration = '15s', active = false } = props;
  return active
    ? (
        <StyledTicker>
          <TickerWrap style={{ animationDuration: duration }}>
            <TickerContent>
              {children}
            </TickerContent>
          </TickerWrap>
        </StyledTicker>
    )
    : (<> { children } </>);
}

Ticker.propTypes = {
  duration: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
};