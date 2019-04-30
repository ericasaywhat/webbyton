import colors from './themes/colors'
import fonts from './themes/fonts'

const portfolioStyles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    padding: '10px',
    // alignSelf: 'center',
    ...fonts.title,

  },
  contentContainer: {
    display: 'flex',
    padding: '20px',
    flexDirection: 'row',
    alignSelf: 'center',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    // width: '800px'
  },
  card: {
    cardStyle: {
      display: 'flex',
      width: '300px',
      height: '300px',
      flexDirection: 'column',
      margin: '1%',
      alignItems: 'center',
      border: '2px solid',
      borderColor: colors.brand,
      borderRadius: '10px',
      overflow: 'hidden',
      justifyContent: 'center',
    },
    content: {
      position: 'absolute',
      width: '300px',
      color: colors.light,
      textAlign: 'center',
    },
    titleStyle: {
      ...fonts.portfolio.cardContent,
      fontWeight: 'bold',
    },
    descStyle: {
      ...fonts.portfolio.cardContent,
    },
    imgStyle: {
      height: '100%',
      zIndex: 1,
    },
    hoverImg: {
      opacity: 0.1,
    },
    arrowStyle: {
      fontSize: '20px'
    }
  }
}

export default portfolioStyles
