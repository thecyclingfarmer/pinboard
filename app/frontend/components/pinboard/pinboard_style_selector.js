import React from 'react';

class PinboardStyleSelector extends React.Component {

  constructor(props) {
    super(props);

  }

  handleChange() {
    let layout = {
      type: this.refs.type.value,
      size: parseInt(this.refs.size.value),
      color: this.refs.color.value,
    };

    this.props.handlePreview(layout);
  }

  render() {

    let type = this.props.layouts.type.map((type) => {
      return (<option value={type.value} key={type.value}>{type.name}</option>);
    });

    let size = this.props.layouts.size.map((size) => {
      return (<option value={size.value} key={size.value}>{size.name}</option>);
    });

    let color = this.props.layouts.color.map((color) => {
      return (<option value={color.value} key={color.value}>{color.name}</option>);
    });

    return (
      <div className="pinboard_item_style-selector">
        <select ref="type" onChange={this.handleChange.bind(this)} value={this.props.layout.type}>{type}</select>
        <select ref="size" onChange={this.handleChange.bind(this)} value={this.props.layout.size}>{size}</select>
        <select ref="color" onChange={this.handleChange.bind(this)} value={this.props.layout.color}>{color}</select>
        <button onClick={this.props.handleCancel.bind(this)}>Cancel</button>
        <button onClick={this.props.handleSave.bind(this)}>Save</button>
      </div>
    );
  }
};

export default PinboardStyleSelector;
