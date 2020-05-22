import styled from 'styled-components';
import home from '../images/accueil4.jpg';

const Hero = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${home}) top/cover no-repeat;
  background-attachment: fixed;
  @media (max-width:768px) {
    background-attachment: scroll;
  }
`;

export default Hero;