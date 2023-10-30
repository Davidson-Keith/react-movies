import React from "react";

class ErrorBoundary extends React.Component<errorBoundaryProps, errorBoundaryState>
{
  constructor(props: errorBoundaryProps){
    super(props);
    this.state = {hasError: false, message: ''}
  }

  static getDerivedStateFromError(error: any){
    return {hasError: true, message: error}
  }

  componentDidCatch(error: any, errorInfo: any){
    console.log(error);
  }

  render(){
    // return (<></>)
    if (this.state.hasError){
      if (this.props.errorUI){
        return this.props.errorUI;
      } else{
        return <h3>{this.state.message}</h3>
      }
    } else{
      // return this.props.children;
      return (<></>)
    }
  }
}

interface errorBoundaryProps{
  errorUI?: React.ReactNode
}

interface errorBoundaryState{
  hasError: boolean;
  message: string;
}

export default ErrorBoundary;


//
//
// import React from "react";
//
// // Can do either this:
// // class ErrorBoundary extends React.Component<{ errorUI: React.ReactNode, hasError: boolean, message: string }> {
//
// // Or, by creating the interfaces at the bottom of this file, can do it like this:
// class ErrorBoundary extends React.Component<errorBoundaryProps, errorBoundaryState> {
//   constructor(props: errorBoundaryProps) {
//     super(props);
//     this.state = {hasError: false, message: ''}
//   }
//
//   static getDerivedStateFromError(error: any) {
//     return {hasError: true, message: error}
//   }
//
//   componentDidCatch(error: any, errorInfo: any) {
//     console.log(error);
//     // console.log(errorInfo);
//   }
//
//   render() {
//     if (this.state.hasError) {
//       if (this.props.errorUI) {
//         return this.props.errorUI;
//       } else {
//         return <h3>{this.state.message}</h3>
//       }
//     } else {
//       // return this.props.children;
//       // return this.props;
//       return <></>
//     }
//   }
//
// }
//
// interface errorBoundaryProps {
//   errorUI?: React.ReactNode;
// }
//
// interface errorBoundaryState {
//   hasError: boolean;
//   message: string
// }
//
// export default ErrorBoundary;