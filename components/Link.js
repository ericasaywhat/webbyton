import colors from '../styles/themes/colors'
import pageStyles from '../styles/pageStyles'

class Link extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mouseOver: false
    }
  }

  onMouseEnter = () => {
    this.setState({
      mouseOver: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      mouseOver: false
    })
  }

  render(){
    const topBarHoveredLink = (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={pageStyles.linkHovered}>
        <a style={{textDecoration:"none", color: colors.brand}} href={this.props.url} >{this.props.name} </a>
      </div>
    )

    const hoveredLink = (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={{...pageStyles.linkHovered, borderBottom: 'none'}}>
        <a style={{textDecoration:"none", color: colors.brand}} href={this.props.url} >{this.props.name} </a>
      </div>
    )

    const link = (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={pageStyles.link}>
        <a style={{textDecoration:"none", color: colors.lightAccent}} href={this.props.url} >{this.props.name} </a>
      </div>
    )

    return(
      this.state.mouseOver ? (!this.props.isTopBar ? hoveredLink : topBarHoveredLink) : link
    )
  }

}

export default Link
