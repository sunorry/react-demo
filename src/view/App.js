import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { QueryLink } from '../component';
import { Search, Login, PrivateRoute } from './index'


// const Home = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to='/search'>Search</Link></li>
//         <li><Link to='/login'>Login</Link></li>
//       </ul>
//         <Route exact path='/' render={() => <div>HOME</div>} />
//         <Route path='/login' component={Login} />
//         <PrivateRoute path='/search' component={Search} />
//     </div>
//   </Router>
// )

class Home2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: 'a'
        }
    }

    render() {
        const { search } = this.state
        return <Router>
          <div>
            <ul>
              <li><Link to={{ pathname: '/search', search: `parA=${search}` }}>Search</Link></li>
              <li><QueryLink to={{ pathname: '/search', query: { paramsA: search } }}>Search Link</QueryLink></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
              <Route exact path='/' render={() => <div>HOME</div>} />
              <Route path='/login' component={Login} />
              <PrivateRoute path='/search' component={Search} />
          </div>
        </Router>
    }
}

export default Home2
