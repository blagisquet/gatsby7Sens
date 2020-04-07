import styled from 'styled-components';
import home from '../images/accueil.jpg';

const Hero = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${home}) center/cover fixed no-repeat;
`;

export default Hero;