/* jshint esversion:6 */
import React, {
  Component,
  PropTypes
} from 'react';

import './Content.scss';

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className={'content-wrap'}>
            {this.props.content}
        </div>
    );
  }
}

Content.PropTypes = {
    content: PropTypes.string.isRequired
};
