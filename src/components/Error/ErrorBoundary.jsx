import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error captured by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <h1 className="p-20">Algo salió mal.</h1>
            <button className="bg-gray-100 border-4 border-sky-500 rounded-lg p-1.5" onClick={this.handleGoHome}>Volver al inicio</button>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ErrorBoundary;
