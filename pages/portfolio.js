import portfolioStrings from '../config/projectStrings'
import portfolioStyles from '../styles/portfolioStyles'
import pageStyles from '../styles/pageStyles'
import colors from '../styles/themes/colors'
import Connect from '../components/Connect'
import PortfolioCard from '../components/PortfolioCard'
import TopBar from '../components/TopBar'

const renderCards = () => {
    let portfolio = portfolioStrings.portfolio
    return(
      Object.keys(portfolio).map((key, index) => (
        <PortfolioCard
          key={index}
          imageSrc={portfolio[key]["img"]}
          title={portfolio[key]["title"]}
          desc={portfolio[key]["desc"]}
        />
      ))
    )
  }

const Portfolio = () => (
  <div style={pageStyles.body}>
  <TopBar />
    <div style={portfolioStyles.mainContainer}>
      <div style={portfolioStyles.titleContainer}>
        Portfolio
      </div>
      <div style={portfolioStyles.contentContainer}>
        {renderCards()}
      </div>
    </div>
  </div>
)

export default Portfolio
