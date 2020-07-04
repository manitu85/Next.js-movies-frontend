import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import HeaderContext from '../contexts/HeaderContext'

function Navigation() {
  
  const router = useRouter()
  const { menuItems, color } = useContext(HeaderContext)

  return (
    <NavigationStyled color={color}>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? 'active' : ''}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  )
}

const dynamicStyle = props =>
  css`
     color: ${props.color ? '#4C9E' : '#f72626'};
  `
const NavigationStyled = styled.div`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        li {
            margin-left: 20px;
        }
        a {
            text-decoration: none;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
            ${dynamicStyle}
            /* color: ${props => props.color ? '#4C9E' : '#f72626'}; */
            &:hover {
                color: #efefef;
            }
            &.active {
                color: #fff;
            }
        }
    }
`

export default Navigation

