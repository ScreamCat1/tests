import React, { PureComponent } from 'react';
import  './ItemInformation.css';

class ItemInformation extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      item: {},
      change: false
    }
  }

  componentWillReceiveProps(nextProps) {
  this.setState({
    item: nextProps.currentItem
  });
}

  onChangeField = ({target: { value }}) => {
    this.setState(prevState => ({
      item: {...prevState.item, title: value }})
    )
  }
  toggleElements = () => this.setState(
    prevState => ({
       change: !prevState.change})
     )

  changeTitle = ({ target: { placeholder }}) => {
      if(this.state.item.title !== placeholder) {
          this.props.updateItemField(this.state.item)
      } else {
        this.toggleElements()
      }
  }

  renderItem = ({ title, text, img, id}) => (
    <div className="item-information">
      <input type="text"
      className="item-information-field"
       value={this.state.item.title}
       onChange={this.onChangeField}
       placeholder={this.props.currentItem.title}
       onBlur={this.changeTitle}
       id={id}
       />
      <img src={img} alt="" className="item-information-picture" />
      <p className="item-information-text">{text}</p>
    </div>
  );

  render() {
    const { currentItem } = this.props;
    return (
      <div className="item-information-wrap">
        {Object.getOwnPropertyNames(currentItem).length > 0 ?
          this.renderItem(currentItem)
          : null}
      </div>);
  }
}

export default ItemInformation;
