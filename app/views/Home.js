import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getMessage } from '../actions';

class Home extends Component {

  componentWillMount() {
    this.props.getMessage();
  }

  render() {
    if (_.isEmpty(this.props.msg)) {
      return <div>loading...</div>;
    }

    return <div>{ this.props.msg } Home</div>;
  }
}

const mapStateToProps = state => ({ msg: state.msg.msg });

export default connect(mapStateToProps, { getMessage })(Home);
