import React from 'react';
import PinboardActions from '../../actions/pinboard_actions';
import PinboardStore from '../../stores/pinboard_store';
import PinboardStyleSelector from './pinboard_style_selector';
import PinboardItemImage from './pinboard_item_image';
import classNames from 'classnames';

class PinboardItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pinboard: null,
    };
  }

  componentDidMount() {
    this.setState({
      pinboard: this.props.pinboard,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pinboard: nextProps.pinboard,
    });
  }

  componentDidUpdate() {
    this.props.reLayout();
  }

  handlePreview(layout) {
    this.state.pinboard.layout = layout;
    this.setState({ pinboard: this.state.pinboard });
  }

  handleSave(e) {
    e.preventDefault();
    PinboardActions.savePinboardItem(this.state.pinboard);
  }

  handleCancel(e) {
    e.preventDefault();
    PinboardActions.loadPinboard();
  }

  render() {
    if (!this.state.pinboard) return null;

    let pinboard = this.state.pinboard;

    let layout = classNames({
      'pinboard_item': true,
      'pinboard_item--two-columns': pinboard.layout.size === 2,
      'pinboard_item--brushed': pinboard.layout.type === 'brushed',
      'clearfix': true,
    });

    let color = 'pinboard_item_content ' + pinboard.layout.color;

    let image = null;

    let props = {
      layouts: this.props.layouts,
      layout: pinboard.layout,
      handlePreview: this.handlePreview.bind(this),
      handleSave: this.handleSave.bind(this),
      handleCancel: this.handleCancel.bind(this),
    };

    return (
      <div className={layout}>
        <div className="columns">
          <div className={color}>
            <PinboardItemImage image={pinboard.data.image} />
            <div className="pinboard_item_content_editorial">
              <span>{pinboard.data.category}</span>
              <h2>{pinboard.data.heading}</h2>
              <p>{pinboard.data.text}</p>
            </div>
            <PinboardStyleSelector {...props} />
          </div>
        </div>
      </div>
    );
  }
};

export default PinboardItem;
