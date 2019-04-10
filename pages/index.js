import strings from '../config/strings'
import pageStyles from '../styles/pageStyles'
import colors from '../styles/themes/colors'
import Connect from '../components/Connect'
import TopBar from '../components/TopBar'

class Landing extends React.Component {
  render() {
    return (
      <div style={pageStyles.body}>
      <TopBar />
        <div style={pageStyles.mainContainer}>
          <div style={pageStyles.titleContainer}>
            {strings.landing.title}
          </div>
          <div style={pageStyles.contentContainer}>
            {strings.landing.desc}
          </div>
          <div style={pageStyles.portfolioLink}>
            <a href={strings.landing.portfolio.url} style={{ textDecoration: 'none', color: colors.lightAccent }}>{strings.landing.portfolio.text}</a>
          </div>
          <Connect />

      </div>
    </div>
    )
  }
}

export default Landing
