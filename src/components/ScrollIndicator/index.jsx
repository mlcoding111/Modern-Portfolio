import React from "react";
import styled from "styled-components";

function ScrollIndicator() {

  window.onscroll = function(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
  }
  return (
    <Wrap>
      <div id="progress">

      </div>
    </Wrap>
  );
}

export default ScrollIndicator;

export const Wrap = styled.div`
    top: 0;
    position: sticky;
    width: 100%;
    height: 10px;
    z-index: 999;
    #progress{
      height: 8px;
      background: ${props => props.theme.secondary};
      width: 50%;
    }
`;
