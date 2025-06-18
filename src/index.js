import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

// Create a custom ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error("Application crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app" style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Something went wrong</h1>
          <p>
            We're sorry, but an error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#f9d3b4",
              color: "#212426",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontWeight: "bold",
              margin: "1rem 0",
            }}
          >
            Refresh Page
          </button>
          <pre
            style={{
              textAlign: "left",
              background: "rgba(255,255,255,0.1)",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflow: "auto",
              fontSize: "0.8rem",
            }}
          >
            {this.state.error && this.state.error.toString()}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
