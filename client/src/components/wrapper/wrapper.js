import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  width: 100%;
  word-wrap: break-word;
  background-color: #fff;
  margin: 0;
  padding: 50px 10%;
  min-height: 150px;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

export default Wrapper
