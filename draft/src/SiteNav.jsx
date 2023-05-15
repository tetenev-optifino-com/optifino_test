import {Link} from 'react-router-dom'

export const SiteNav = () => {
  return (
    <ul style={{display: 'flex', alignItems: 'center', height: '60px', padding: 0, margin: 0}}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/wizard/1'>Wizard</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  )
}