import strings from '../config/strings'
import pageStyles from '../styles/pageStyles'
import Link from './Link'

const TopBar = () => {
  let links = strings.topBar
  return (
    <div style={pageStyles.topBar}>
      {Object.keys(links).map((key, index) => (
        <Link
          key={index}
          isTopBar={true}
          name={links[key]["name"]}
          url={links[key]["url"]}
        />
      ))}
    </div>
  )
}

export default TopBar
