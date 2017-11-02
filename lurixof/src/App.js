import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css';

import ListItem from './copmonents/ListItem';
import ItemInformation from './copmonents/ItemInformation'
import {
  loadData,
  setItem,
  updateItem
} from './actions';

class App extends Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    axios.get('data.json')
      .then(({data}) => this.props.loadData(data));
  }

  updateItemField = (item) => {
    this.props.updateItem(this.props.data, item)
  }

  showItemInfo = ({target: {dataset: {id}, classList }}) => {
    this.props.setItem(this.props.data,id);
    const prevActiveItem = document.querySelector('.list-item__active');

    prevActiveItem ? prevActiveItem.classList.remove('list-item__active'): null;
    classList.add('list-item__active');
  };

  render() {
    const {data, currentItem} = this.props;
    return (
      <main>
        <ListItem data={data} showItemInfo={this.showItemInfo} some='some'/>
        <ItemInformation currentItem={currentItem} updateItemField={this.updateItemField} />
      </main>
    )
  }
}

const mapStateToProps = ({data, currentItem}) => (
{
  data,
  currentItem
});

export default connect(mapStateToProps, {loadData, setItem, updateItem})(App);
