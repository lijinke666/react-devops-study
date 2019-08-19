import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { message } from 'antd'
import errorBoundary from 'shared/components/ErrorBoundary'

import sayHello from './action'
import './styles.less'

@connect(
  ({ HomeReducer }) => ({
    data: HomeReducer.data,
    loading: HomeReducer.loading
  }),
  dispatch =>
    bindActionCreators(
      {
        sayHello
      },
      dispatch
    )
)
@errorBoundary
export default class Home extends PureComponent {
  constructor(props) {
    super(props)
  }
  goGithub = url => {
    message.info('Thank you!')
    location.href = url
  }
  render() {
    return (
      <div key="home" className="home">
        测试 PR
      </div>
    )
  }
  componentDidMount() {
    this.props.sayHello()
  }
}
