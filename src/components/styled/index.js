import styled, { keyframes } from "styled-components";

const jiggle = keyframes`
  0% {
    transform: scale(0.8, 0.8);
  }
  30% {
    transform: scale(0.75, 1.15);
  }
  50% {
    transform: scale(1.12, 0.75);
  }
  60% {
    transform: scale(0.9, 1.12);
  }
  70% {
    transform: scale(1.05, 0.95);
  }
  80% {
    transform: scale(0.85, 1.05);
  }
  90% {
    transform: scale(1.02, 0.98);
  }
  95% {
    transform: scale(0.98, 1.02);
  }
  98% {
    transform: scale(1.01, 0.99);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const innerJiggle = keyframes`
  0% {
    transform: scale(0.8, 0.8);
  }
  30% {
    transform: scale(0.75, 1.15);
  }
  50% {
    transform: scale(1.12, 0.75);
  }
  60% {
    transform: scale(0.9, 1.12);
  }
  70% {
    transform: scale(1.05, 0.95);
  }
  80% {
    transform: scale(0.85, 1.05);
  }
  90% {
    transform: scale(1.02, 0.98);
  }
  95% {
    transform: scale(0.98, 1.02);
  }
  98% {
    transform: scale(1.01, 0.99);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const compress = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0.8, 0.8);
  }
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    -webkit-box-shadow: 0 0 0 0 #ffb6c1;
  }
  70% {
      -webkit-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
  }
  @keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 #ffb6c1;
    box-shadow: 0 0 0 0 #ffb6c1;
  }
  70% {
      -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
      box-shadow: 0 0 0 20px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
`;

export const SidebarContainer = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  height: 100vh;
  min-width: 20%;
  border-right: 2px solid #eee;
  overflow-y: scroll;

  .sidebar__content {
    padding: 30px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .repo {
    display: flex;
    cursor: pointer;
    opacity: 0.9;
    max-height: 100%;
    flex-direction: row;
    border-bottom: 2px solid #eee;
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.8);
    }

  .repo__content {
    display: flex;
    align-items: center;

    img {
      margin-left: 2rem;
      border-radius: 50%;
      height: 2rem;
      width: 2rem;
    }

    & > div {
      padding: 1.5rem;
      overflow: hidden;
      flex: 2;
    }
  }

  .repo__title {
    text-decoration: none;
    color: #2c3e50;
    font-size: 1em;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-transform: capitalize;
    text-overflow: ellipsis;

    &:hover {
      color: darken(#2c3e50, 80%);
    }
  }

  .repo__body {
    margin-bottom: 0;
    font-size: 0.9em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .repo__active {
      position: relative;
      display: block;
      background-color: #5583f6;
      color: #fff;
      width: 10px;
      min-height: 100%;
      transition: margin-left 200ms ease-in-out;
  }
}

  @media (max-width: 1024px) {
    min-width: 25%;
  }

  @media (max-width: 768px) {
    min-width: 30%;
  }
`;

export const CentralizedContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .input-container {
    display: flex;
    z-index: 3;
    height: 44px;
    background: #fff;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    margin: 0 auto;
    width: 638px;
    max-width: 584px;
    transition: all 400ms ease-in-out;

    &:hover {
      background-color: #fff;
      box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
      border-color: rgba(223, 225, 229, 0);
    }

    > div {
      flex: 1;
      display: flex;
      padding: 5px 8px 0 14px;
    }

    .append-icon {
      display: flex;
      align-items: center;
      padding-right: 13px;
      margin-top: -5px;

      span {
        height: 20px;
        line-height: 20px;
        width: 20px;
        margin-top: 3px;
        color: #9aa0a6;

        svg {
          display: block;
          height: 100%;
          width: 100%;
        }
      }
    }

    .mic-wrapper {
      display: flex;
      flex: 0 0 auto;
      margin-top: -5px;
      align-items: stretch;
      flex-direction: row;

      .mic {
        flex: 1 0 auto;
        display: flex;
        cursor: pointer;
        align-items: center;
        border: 0;
        background: transparent;
        outline: none;
        padding: 0 8px;
        width: 24px;
        line-height: 44px;

        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  .input-wrapper {
    display: flex;
    flex: 1;
    flex-wrap: wrap;

    div {
      color: transparent;
      flex: 100%;
      white-space: pre;
      height: 34px;
      font-size: 16px;
    }

    input[type="text"] {
      background-color: transparent;
      border: none;
      margin: 0;
      padding: 0;
      color: rgba(0, 0, 0, 0.87);
      word-wrap: break-word;
      outline: none;
      display: flex;
      flex: 100%;
      -webkit-tap-highlight-color: transparent;
      margin-top: -37px;
      height: 34px;
      font-size: 16px;
    }
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }

  .control-group {
    margin-top: 25px;
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }

    label {
      padding-left: 1.5rem;
      text-transform: capitalize;
      margin-bottom: 2px;
      position: relative;

      &.blue::after {
        background: #5583f6;
      }

      &::before,
      &::after {
        position: absolute;
      }

      &::before {
        border: 3px solid #5583f6;
        border-radius: 50%;
        box-sizing: border-box;
        content: "";
        display: block;
        height: 1.2rem;
        width: 1.2rem;
        top: -2px;
      }

      &::after {
        border: 2px solid white;
        border-radius: 50%;
        box-sizing: border-box;
        content: "";
        display: block;
        height: 0.8rem;
        width: 0.8rem;
        top: 1.3px;
        left: 3px;
      }
    }

    input[type="radio"] {
      opacity: 0;
      position: absolute;

      & + label::after{
        content: none;
      }

      &:checked + label::after {
        content: "";
      }

      &:checked + label.blue::before {
        border-color: #5583f6;
      }

      &:checked + label.jiggle::before {
        -webkit-animation-name: ${jiggle};
        animation-name: ${jiggle};
        -webkit-animation-duration: 700ms;
        animation-duration: 700ms;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      }

      &:checked + label.jiggle::after {
        -webkit-animation-name: ${innerJiggle};
        animation-name: ${innerJiggle};
        -webkit-animation-duration: 700ms;
        animation-duration: 700ms;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      }

      &:active + label::before {
        -webkit-animation-name: ${compress};
        animation-name: ${compress};
        -webkit-animation-duration: 700ms;
        animation-duration: 700ms;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      }
    }
  }

  @media (max-width: 768px) {
    .input-container {
      width: calc(100vw - 100px);
    }
  }
`;

export const Loader = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #5583f6;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`

export const Title = styled.h2`
  outline: none;
  padding: 20px 10px;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font: inherit;
  text-align: center;
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const SpeakerWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .wrapper {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #697786;
      font-weight: 300;
      font-size: 2rem;
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      box-shadow: 0 0 0 #ffb6c1;
      animation: ${pulse} 2s infinite;
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      width: 90%;

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 1024px) {
    .wrapper {
      width: 80%;

      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const PadContainer = styled.div`
  flex: 5;
  flex-direction: column;
  display: flex;
  width: 100%;

  .pad__container {
    padding: 2rem;
    width: 100%;
  }

  .pad__title {
      border: 0;
      outline: none;
      padding: 20px 20px 20px 15px;
      text-transform: capitalize;
      font: inherit;
      font-size: 1.5em;
  }

  .pad__text {
      border: 0;
      outline: none;
      padding: 30px;
      flex: 2;
      font: inherit;
      resize: none;
      line-height: 2;
      letter-spacing: 2px;
  }

  button {
    display: flex;
    cursor: pointer;
    align-items: center;
    border: none;
    background: inherit;
    font-size: 1rem;
    font-weight: 400;

    img {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.5rem;
    }
  }

  img {
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }

  .full-control {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .language__container {
      margin-right: 10px;
  }

  .language__color {
      width: 10px;
      height: 10px;
      border-radius: 50%;
  }

  .language__name {
      margin-left: 5px;
  }

  .target__link {
    margin-top: -4px;
    color: #333333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:after {
      content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
      margin: 0 3px 0 5px;
    }

    .ml-3 {
      margin-left: 2rem;
    }
  }
`;

export const ListingWrapper = styled.div`
  margin-top: 1rem;

  .flex {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .list {
      width: 25%;
      margin-bottom: 1.5rem;
      margin: 0 1rem;

      @media (max-width: 1024px) {
        width: 45%;
      }
    
      @media (max-width: 768px) {
        width: 95%;
      }

      h4 {
        color: #2c3e50;
        font-weight: 500;
        font-size: 0.9rem;
        text-transform: uppercase;
      }

      a {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
    }
  }
`;

export const ColorIdentifier = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${props => props.inputColor || "#000"}
`;

export const ResultContainer = styled.div`
  display: flex;

  .no-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    text-align: center;

    & > div {
      img {
        width: 3rem;
        height: 3rem;
      }

      h3 {
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
        color: #4C4C5C;
        font-weight: 400;
        font-size: 1.5rem;
      }

      button {
        color: #fff;
        background: #5583f6;
        padding: 0.6rem 4rem;
        font-weight: 400;
        border: none;
        cursor: pointer;
        border-radius: 2rem;
      }
    }
  }
`;

export const CentralizedFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const PageLoader = styled(Loader)`
  width: 3.5rem;
  height: 3.5rem;
  border-width: 0.4rem;
`;