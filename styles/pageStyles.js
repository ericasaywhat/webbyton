import colors from './themes/colors'
import fonts from './themes/fonts'

const pageStyles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100%',
    minHeight: '100%',
    background: colors.light,
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '50%',
    alignItems: 'flex-start',
    alignSelf: 'center',
    // background: 'red',
    // justifyContent: 'center',
    // height: '100vh'
  },
  topBar: {
    display: 'flex',
    flexShrink: 0,
    flexGrow: 0,
    height: '40px',
    width: '50%',
    justifyContent: 'flex-end',
    // marginRight: 'px',
    // borderBottom: '1px solid',
  },
  link: {
    flexGrow: 0,
    flexShrink: 0,
    padding: '10px',
    marginLeft: '10px',
    ...fonts.link
  },
  linkHovered:{
    flexGrow: 0,
    flexShrink: 0,
    height: 'full',
    color: colors.brand,
    marginLeft: '10px',
    borderBottom: '2px solid',
    padding: '10px',
    ...fonts.link,
    borderColor: colors.brand,
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
    flexDirection: 'column',
    // alignSelf: 'center'
  },
  portfolioLink: {
    display: 'flex',
    alignSelf: 'center'
  }
}

export default pageStyles
