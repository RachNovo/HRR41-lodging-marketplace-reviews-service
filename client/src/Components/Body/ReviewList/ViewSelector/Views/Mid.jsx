import React, {Component} from 'react';
import styles, {right, left, selectedStyle, number, elipses} from '../ViewSelector.css';

class Mid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selected, currentView, views } = this.props;
    return (
      <div>
        <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img></span>
        <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
        <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
        <span className={'_number'} className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
        <span className={selectedStyle}>{selected}</span>
        <span className={'_number'} className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
        <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
        <span className={'_number'} className={number} onClick={currentView.bind(null, views)}>{views}</span>
        <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
      </div>
    )
  }
}

export default Mid;