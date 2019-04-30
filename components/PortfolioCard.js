import strings from '../config/strings'
import colors from '../styles/themes/colors'
import portfolioStyles from '../styles/portfolioStyles'
import connectStyles from '../styles/connect'

class PortfolioCard extends React.Component {
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

  render() {
    return (
      this.state.mouseOver ? (
        <div style={{...portfolioStyles.card.cardStyle, background: colors.brand}}>
          <img style={{...portfolioStyles.card.imgStyle, ...portfolioStyles.card.hoverImg}} src={this.props.imageSrc} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />
          <div style={portfolioStyles.card.content}>
            <div style={portfolioStyles.card.titleStyle}>{this.props.title}</div>
            <div style={portfolioStyles.card.descStyle}>{this.props.desc}</div> 
            <div style={portfolioStyles.card.descStyle}>{"[Click to learn more]"}</div>
          </div>
        </div>
      ) : (
        <div style={portfolioStyles.card.cardStyle}>
          <img style={portfolioStyles.card.imgStyle} src={this.props.imageSrc} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />

        </div>
    )
    )
  }
}

export default PortfolioCard
