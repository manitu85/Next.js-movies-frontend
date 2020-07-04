import Link from 'next/link'
import styled from '@emotion/styled'
import { rem } from 'polished'
import Navigation from './Navigation.component'
import ToggleNavigationColorButton from './ToggleNavigationColorButton.component'

const Header = ({ isDark }) => (
  <HeaderStyled isDark={isDark} >
    <NavigationContainer>
      <Link href='/'>
        <div className='logo'>
          <a>
            <img className='logo-img' src='/film-logo.png' alt='film logo'/>
            <span className='logo-text'>Next Movies</span>
          </a>
        </div>
      </Link> 
      <Navigation />
      {/* <ToggleNavigationColorButton /> */}
    </NavigationContainer>
  </HeaderStyled>
)

const HeaderStyled = styled.header`
  background-color: ${({ isDark, theme }) => isDark ? theme.colors.primary : theme.colors.secondary};
  height:  ${rem('100px')};
  padding: 1rem 0;

  .logo {

    a {
      display: flex;
      align-items: center;
      height: ${rem('80px')};
    }
    /* margin-left: auto; */

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

const NavigationContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

export default Header
