import strings from '../config/strings'
import pageStyles from '../styles/pageStyles'
import connectStyles from '../styles/connect'

const Connect = () => (
  <div style={connectStyles.container}>
    <div style={connectStyles.link}>
      <a style={{ textDecoration: 'none' }} href={strings.connect.linkedin.link} target='_blank'>
        <img style={connectStyles.icon} src='../static/linkedin.svg' />
        </a>
    </div>
    <div style={connectStyles.link}>
      <a style={{textDecoration:'none'}} href={strings.connect.github.link} target='_blank'>
        <img style={connectStyles.icon} src='../static/github.svg' />
      </a>
    </div>
    <div style={connectStyles.link}>
      <a style={{textDecoration:'none'}} href={strings.connect.portfolioBox.link} target='_blank'>
        <img style={connectStyles.icon} src='../static/portfolio.svg' />
    </a>
    </div>
  </div>
)

export default Connect
