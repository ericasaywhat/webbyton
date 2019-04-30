import colors  from './themes/colors'
import fonts  from './themes/fonts'

const connect = {
  container:{
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'flex-start',
    margin: '10px',
    ...fonts.connect
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    margin: '10px',
    alignItems: 'center',
    // border: '1px solid',
    // borderRadius: '4px',
  },
  titleStyle: {
    flexGrow: '2',
  },
  icon: {
    width: '50px',
    padding: '10px',
    // filter: 'invert(100%)'
  },
  hoveredImg: {
    opactiy: '.2'
  },
  arrowStyle: {
    fontSize: '20px'
  }
}

export default connect
