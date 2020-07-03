import styled from '@emotion/styled'
import { rem } from 'polished'

const Header = ({ isDark }) => (
  <HeaderStyled isDark={isDark} >
    <div className='container'>
      <div className='logo'>
        <img className='logo-img' src='/film-logo.png' alt='film logo'/>
        <span className='logo-text'>Next Movies</span>
      </div>
    </div>
  </HeaderStyled>
)

const HeaderStyled = styled.header`
  background-color: ${({ isDark, theme }) => isDark ? theme.colors.secondary : theme.colors.primary};
  height:  ${rem('100px')};
  padding: 1rem 0;

  .logo {
    display: flex;
    align-items: center;
    height: ${rem('80px')};

    .logo-img { 
      max-height: ${rem('60px')};
    }

    .logo-text {
      color: #fff;
      font-weight: 600;
      font-size: 1.5rem;
      margin-left: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
  }
`

export default Header
