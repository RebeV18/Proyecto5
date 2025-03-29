import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

//Componente para capturar los errores.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error capturado por Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="p-20">Algo salió mal.</h1>
            <Button
              className="bg-gray-100 border-4 border-sky-500 rounded-lg p-1.5 bg-esmerald-400"
              onClick={() => window.history.back()}
            >
              Volver
            </Button>
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
