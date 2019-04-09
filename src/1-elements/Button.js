import styled from 'styled-components';

export default styled.a`
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;

  width: 40%;
  font-size: 28px;
  line-height: 3;
  font-weight: bold;
  border-radius: 100px;
  background-image: linear-gradient(
    45deg,
    hsl(351, 100%, 63%),
    hsl(32, 100%, 54%)
  );
  color: var(--background-color);
  -webkit-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition: -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -moz-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -ms-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    -webkit-box-shadow: 0px 9px 0 0 hsla(0, 0%, 17%, 1);
    box-shadow: 0px 9px 0 0 hsla(0, 0%, 17%, 1);
  }

  @media (max-width: 849px) {
    width: 85%;
    line-height: 2.7;
    font-size: 23px;
  }
`;
