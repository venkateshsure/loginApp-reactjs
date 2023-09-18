// Write your code here

import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

class Home extends Component {
  state = {login: false}

  renderFunc = () => {
    const {log} = this.state
    this.setState({log: !log})
  }

  render() {
    const {log} = this.state
    return (
      <div>
        <Message log={log} />
        {log ? (
          <Login logout={this.renderFunc} />
        ) : (
          <Logout login={this.renderFunc} />
        )}
      </div>
    )
  }
}

export default Home
