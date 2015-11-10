var React = require('react');
var ReactDOM = require('react-dom');

var item1 = React.DOM.li({className: 'item-1',
                          key: 'item-1'},
                         'Item 1');
var item2 = React.DOM.li({className: 'item-2',
                          key: 'item-2'},
                         'Item 2');
var item3 = React.DOM.li({className: 'item-3',
                           key: 'item-3'},
                          'Item 3');
var reactFragment = [item1, item2, item3];

var itemList = React.DOM.ul({className: 'item-list'},
                            reactFragment);

ReactDOM.render(itemList, document.getElementById('react-application'));
