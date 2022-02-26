import React from 'react';

const StarList = (props) => {

  const onStarClick = (event) => {
    props.updateFilter(event.target.id);
  };

  const calculatePercentage = (ratings) => {
    let result = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let total = 0;

    for (let key in ratings) {
      total += parseInt(ratings[key]);
    }
    for (let key in ratings) {
      result[key] = Math.ceil(((parseInt(ratings[key]) / total) * 100) / 20 ) * 20;
    }
    return result;
  };

  let ratings = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

  if (props.metaData.data) {
    for (let key in props.metaData.data.ratings) {
      ratings[key] = props.metaData.data.ratings[key];
    }
    ratings = calculatePercentage(ratings);
  }

  return (
    <div id='ratings-breakdown-starlist'>

      <span onClick={onStarClick} className={'star-bar-' + ratings[5]}>5 stars
        <div>
          <span></span>
        </div>
      </span>
      <br></br>

      <span onClick={onStarClick} className={'star-bar-' + ratings[4]}>4 stars
        <div>
          <span></span>
        </div>
      </span>
      <br></br>

      <span onClick={onStarClick} className={'star-bar-' + ratings[3]}>3 stars
        <div>
          <span></span>
        </div>
      </span>
      <br></br>

      <span onClick={onStarClick} className={'star-bar-' + ratings[2]}>2 stars
        <div>
          <span></span>
        </div>
      </span>
      <br></br>

      <span onClick={onStarClick} className={'star-bar-' + ratings[1]}>1 stars
        <div>
          <span></span>
        </div>
      </span>
      <br></br>

      <span>Filters: <br></br> {
        props.currentFilter.map((rating, index) => {
          if (index === props.currentFilter.length - 1) {
            return <span key={index}>{rating}</span>;
          } else {
            return <span key={index}>{rating}, </span>;
          }
        })
      }</span><br></br>
      {
        props.currentFilter.length > 0
          ? <span onClick={onStarClick} id='0'>Remove</span>
          : <span></span>
      }
    </div>
  );
};

export default StarList;