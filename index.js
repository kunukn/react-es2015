function ReactDOM() {}
ReactDOM.render = function () {
  console.error('dummy render function, use the correct react-dom library');
};

module.exports = ReactDOM;
