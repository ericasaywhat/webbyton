import { Link } from '../config/routes'
import strings from '../config/strings'
class Landing extends React.Component {
  render() {
    return (
      <div>
        <Link href={`${strings.links.linkedin}`}><a>Profile</a></Link>
      </div>
    )
  }
}

export default Landing
