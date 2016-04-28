import React from 'react';

class PinboardItemImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.image) return null;

    return (
      <figure className="pinboard_item_image">
        <img src={this.props.image} alt="" />
      </figure>
    );
  }
};

export default PinboardItemImage;
