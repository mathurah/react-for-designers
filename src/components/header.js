import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

// component with a state - going to listen to different events that's the lifecycle of the component
class Header extends React.Component {
  constructor(props) {
    super(props)

    // initial state for the component
    this.state={
      hasScrolled: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset 
    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    }
    else {
      this.setState({hasScrolled: false})
    }
  }
  render() {
    return (
    <div className={this.state.hasScrolled ? 'Header HeaderScrolled':'Header '}>
      <div className="HeaderGroup">
         <Link to="/"><img src ={require('../images/logo-designcode.svg')} width ="30"></img></Link>   
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy"><button>Buy</button></Link>
     </div>
  </div>
    )
  }
}
export default Header
