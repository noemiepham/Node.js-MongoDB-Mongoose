import React from 'react';

class Drax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Nothing goes over my head, I would catch it.</h1>
          <pre>{this.state.error}</pre>
        </>
      );
    }

    return this.props.children;
  }
}

export default Drax;
