import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css';

import ListItem from './copmonents/ListItem';
import ItemInformation from './copmonents/ItemInformation'
import {
  loadData,
  setItem
} from './actions';

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  
  componentDidMount() {
    axios.get('data.json')
      .then(({data}) => this.props.loadData(data));
  }
  
  showItemInfo = ({target: {dataset: {id}}}) => (
    this.props.setItem(this.props.data,id));
  
  render() {
    const {data, currentItem} = this.props;
    return (
      <main>
        <ListItem data={data} showItemInfo={this.showItemInfo} some='some'/>
        <ItemInformation currentItem={currentItem}/>
      </main>
    )
  }
}

const mapStateToProps = ({data, currentItem}) => (
{
  data,
  currentItem
});

export default connect(mapStateToProps, {loadData, setItem})(App);
