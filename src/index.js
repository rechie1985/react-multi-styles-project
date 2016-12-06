/* jshint esversion: 6 */
import React, {
  Component,
  PropTypes
} from "react";

import { render } from 'react-dom';
import Title from './components/Title/Title';
import Content from './components/Content/Content';

class App extends Component {
    render() {
        return (
            <div className={'app-wrap'}>
                <Title title={'这里是标题a'}/>
                <Content content={'这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容'}/>
            </div>
        )
    }
}

render(<App />, document.getElementById('container'));
