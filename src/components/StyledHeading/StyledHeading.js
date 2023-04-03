import styled from 'styled-components';


export const StyledHeading = styled.h1`
& {
  text-align: center;
  /* color: tomato; */
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 2rem; */
  width: 100%;
  white-space: nowrap;
  margin-bottom: 3rem;
}

& > span {
  position: relative;
  padding: 0.5rem 1rem;
  color: ${({theme}) => theme.colors.white};
  border-radius: 1rem;
  border: 1px solid rgb(75, 108, 193);
  /* border-width: 0 2px; */
  border-bottom-width: 5px;
  font-weight: normal;
  /* background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(75, 108, 193) 50%, rgb(19, 173, 199) 100%) repeat scroll 0% 0%; */
  /* background: #222A35; */

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    display: block;
    z-index: -1;
    border-radius: 1rem;
    /* background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(75, 108, 193) 50%, rgb(19, 173, 199) 100%) repeat scroll 0% 0%; */
    height: 124%;
    width: 105%;
    transform: translate(-50%, -50%);
    /* scale: 1.2; */

  }
}

&::before{
  content: "";
  display: block;
  position: relative;
  top: 0;
  width: 100%;
  height: 1px;
  /* margin-right: 20px; */
  background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(75, 108, 193) 0%, rgb(34, 42, 53) 100%) repeat scroll 0% 0%;
}

&::after{
  content: "";
  display: block;
  position: relative;
  top: 0;
  width: 100%;
  height: 2px;
  /* margin-left: 20px; */
  background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(34, 42, 53) 0%, rgb(75, 108, 193) 100%) repeat scroll 0% 0%;
}
`;