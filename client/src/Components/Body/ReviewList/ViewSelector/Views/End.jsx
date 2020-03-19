import React, {Component} from 'react';
import styles, {right, left, selectedStyle, number, elipses} from '../ViewSelector.css';

class End extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selected, currentView, views } = this.props;
    if (selected === views - 3) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={selectedStyle}>{selected}</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected + 2)}>{selected + 2}</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected + 3)}>{selected + 3}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
        </div>
      )
    } else if (selected === views - 2) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={selectedStyle}>{selected}</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected + 2)}>{selected + 2}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
        </div>
      )
    } else if (selected === views - 1) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={'_number'} className={selectedStyle}>{selected}</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected + 1)}>{selected + 1}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
        </div>
      )
    } else {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected - 2)}>{selected - 2}</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, selected - 1)}>{selected - 1}</span>
          <span className={selectedStyle}>{selected}</span>
        </div>
      )
    }
  }
}

export default End;