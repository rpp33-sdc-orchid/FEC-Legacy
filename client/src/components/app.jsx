import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductOverview from './product_overview/overview.jsx';
import QuestionsAndAnswers from './questions_and_answers/q&a.jsx';
import RatingsAndReviews from './ratings_and_reviews/ratings&reviews.jsx';
import RelatedItemsOutfitCreation from './related_items_outfit_creation/related_items&outfit.jsx';
import { product, styles } from '../sampleData/sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: product,
      styles: styles,
      myOutfits: [],
      starRating: 0
    };
  }

  componentDidMount() {
    this.getStyles();
    this.getProduct();
  }

  getProduct() {
    //TODO: Get request for product
  }

  getStyles() {
    //TODO: Get request for styles
  }

  addToMyOutfit(id) {
    let myOutfits = this.state.myOutfits;
    myOutfits.push(id);
    this.setState({ myOutfits: myOutfits });
  }

  removeFromMyOutfit(id) {
    let index = this.state.myOutfits.indexOf(id);
    let myOutfits = this.state.myOutfits;
    myOutfits.splice(index, 1);
    this.setState({ myOutfits: myOutfits });
  }

  updateStarRating(rating) {
    this.setState({ starRating: rating });
  }

  render() {
    return (
      <div>
        <ProductOverview product={this.state.product} styles={this.state.styles} starRating={this.state.starRating} addToMyOutfit={this.addToMyOutfit.bind(this)}/>
        <QuestionsAndAnswers product={this.state.product}/>
        <RatingsAndReviews
          starRating={this.state.starRating}
          updateStarRating={this.updateStarRating.bind(this)}/>
      </div>
    );
  }
}

export default App;