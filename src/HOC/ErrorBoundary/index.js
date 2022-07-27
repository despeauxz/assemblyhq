import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    color: #4C4C5C;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if(hasError) {
      return (
        <ErrorWrapper>
          <div>
            <img src="/assets/images/warning.png" alt="Warning" />
            <h3>Oops, Something went wrong!</h3>
          </div>
        </ErrorWrapper>
      );
    };
    
    return children;
  }
}

export default ErrorBoundary;
