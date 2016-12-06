/* jshint esversion:6 */
import React, {
  Component,
  PropTypes
} from 'react';

import './Title.scss';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <h2 className={'title-wrap'}>
            {this.props.title}
        </h2>
    );
  }
}

Title.PropTypes = {
    title: PropTypes.string.isRequired
};
