import React, {Component} from 'react'
import logo from '../assets/react.svg'


class Header extends Component{
  constructor(){
    super();
    this.state={navItems:['Home','Placements','Courses','About us']}
  }
  render(){
    return(
      <div className='d-flex bg-primary align-items-center '>
        <img src={logo} alt='' />
        <ul className='d-flex list-unstyled justify-content-around flex-grow-1 p-4'>
          {/* <li>Home</li>
          <li>Placements</li>
          <li>Courses</li>
          <li>About us</li> */}
          {this.state.navItems.map((item,index)=><li>{item}</li>)}
        </ul>
      </div>
    )
  }
}
export default Header


