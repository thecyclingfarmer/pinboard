import React from 'react';
import PinboardActions from '../../actions/pinboard_actions';
import PinboardStore from '../../stores/pinboard_store';
import Packery from 'packery';
import Draggabilly from 'draggabilly';

import PinboardItem from './pinboard_item';

class Pinboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pinboard: null,
    };

    this.packery = null;
  }

  reLayout() {
    if (this.packery) this.packery.layout();
  }

  initPinboard() {
    //Init masonry
    let domObj = document.getElementById('js-pinboard');
    this.packery = new Packery(domObj, {
                      itemSelector: '.pinboard_item',
                      gutter: 0,
                      columnWidth: '.pinboard_grid-sizer',
                    });

    this.packery.getItemElements().forEach((itemElem) => {
      let draggie = new Draggabilly(itemElem);
      this.packery.bindDraggabillyEvents(draggie);
    });
  }

  componentDidMount() {
    PinboardActions.loadPinboard();
    this.unsubscribe = PinboardStore.listen(() => {
      this.setState(PinboardStore.get());
      this.initPinboard();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (!this.state.pinboard) return null;

    let pinItems = this.state.pinboard.items.map((item) => {
      return (<PinboardItem key={item.id} pinboard={item} layouts={this.state.pinboard.layouts} reLayout={this.reLayout.bind(this)} />);
    });

    return (
      <div ref="pinboard" className="pinboard" id="js-pinboard">
        <div className="pinboard_grid-sizer"></div>
        {pinItems}
      </div>
    );
  }
};

export default Pinboard;
