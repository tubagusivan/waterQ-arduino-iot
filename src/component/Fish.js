import styled from 'styled-components';

const Tes = styled.div`
    display: block;
    width: 300px;
    height: 200px;
    border: 1px solid #000;
    // background-color: #000;
    background: url(${props => props.bg});
`;

const Wave = styled.div`
    position: absolute;
    content: "";
    display: inline-block;
    width: 100%;
    height: ${props => props.height};
    bottom: 0;
    left: 0;
    background: url(${props => props.bg});
    background-size: cover;
    transform-origin: center bottom;
    z-index: 11;
    animation: waves 3s linear infinite;
    opacity: 0.6;
  
    &:before {
        position: absolute;
        content: "";
        display: inline-block;
        width: 100%;
        height: ${props => props.height};
        bottom: 0;
        left: 0;
        background: url(${props => props.bg});
        background-size: cover;
        transform-origin: center bottom;
        z-index: 11;
        animation: waves 3s linear infinite;
        animation-direction: reverse;
        opacity: 0.8;
    }
    &:after {
        position: absolute;
        content: "";
        display: inline-block;
        width: 100%;
        height: ${props => props.height};
        top: 0;
        left: 0;
        background: url(${props => props.bg});
        background-size: cover;
        transform-origin: center bottom;
        z-index: 11;
        animation: waves 3s linear infinite;
        animation-delay: -5s;
        opacity: 0.4;
    }
`;

const Status = styled.div`
    position: absolute;
    align-self: flex-start;
    background: ${props => props.status === 'ready' ? 'green' : 'red'};
    border-radius: 50%;
    border: 2px solid #fff;
    height: 30px;
    width: 30px;
    margin: -10px 0 0 338px;
    animation: 0.5s ease infinite blip;
`;
export {
    Wave,
    Tes,
    Status
}