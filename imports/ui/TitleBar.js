import React from 'react';

export default class TitleBar extends React.Component {
renderSubtitle() {
  if (this.props.subtitle) {
    return <h2 className="titleBar__subtitle">{this.props.subtitle}</h2>;
  }
}

  render() {
    return (
      <div className="titleBar">
        <div className="wrapper">
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

