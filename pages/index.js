import strings from '../config/strings'
import pageStyles from '../styles/pageStyles'
import colors from '../styles/themes/colors'
import Connect from '../components/Connect'
import TopBar from '../components/TopBar'
import Link from '../components/Link'

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
            <Link
              name={strings.landing.portfolio.text}
              url={strings.landing.portfolio.url}
            />
          </div>
          <Connect />

      </div>
    </div>
    )
  }
}

export default Landing
