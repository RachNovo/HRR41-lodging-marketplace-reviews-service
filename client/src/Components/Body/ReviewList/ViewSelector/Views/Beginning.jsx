import React, {Component} from 'react';
import styles, {right, left, selectedStyle, number, elipses} from '../ViewSelector.css';


class Beginning extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selected, currentView, views } = this.props;
    if (selected === 1) {
      return (
        <div>
          <span className={selectedStyle}>1</span>
          <span className={'num'} className={number} onClick={currentView.bind(null, 2)}>2</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 3)}>3</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
        </div>
      )
    } else if (selected === 2) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}><img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span className={selectedStyle}>2</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 3)}>3</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
        </div>
      )
    } else if (selected === 3) {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>
            <img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img>
          </span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 2)}>2</span>
          <span className={selectedStyle}>3</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 4)}>4</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
        </div>
      )
    } else {
      return (
        <div>
          <span onClick={currentView.bind(null, selected - 1)}>
            <img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img>
          </span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 1)}>1</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 2)}>2</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 3)}>3</span>
          <span className={selectedStyle}>4</span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, 5)}>5</span>
          <span><img className={elipses} src='https://rachels-review-bucket.s3.amazonaws.com/Elipses.png'></img></span>
          <span className={'_number'} className={number} onClick={currentView.bind(null, views)}>{views}</span>
          <span onClick={currentView.bind(null, selected + 1)}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>
        </div>
      )
    }
  }
}

export default Beginning;