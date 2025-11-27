// import React, { Component } from 'react';

// class Products extends Component {
//   constructor() {
//     super();
//     this.state = {}; 
//     console.log("Constructor");
//     this.state={Products:[]};
//   }

//   static getDerivedStateFromProps(nextProps,prevState) {
//     console.log('getDerivedStateFromProps');
//     return null;
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//       fetch("https://fakestoreapi.in/api/products")
//       .then(response => response.json())
//       .then(data => this.setState({Products:data}))
//   }
//   //to fetch API



//   render() {
//     console.log("render");
//     console.log("Products",this.state.Products)

//     return (
//       <div>
//         Products
//       </div>
//     );
//   }
// }

// export default Products;



import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    // Add an event listener (e.g., window resize)
    window.addEventListener('resize', this.handleResize);

    // Start a timer
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Remove the previously added event listener
    window.removeEventListener('resize', this.handleResize);

    // Stop the timer
    clearInterval(this.timerID);
  }

  handleResize() {
    // Handle window resize event
    console.log('Window resized!');
  }
    render() {
    return (
      <div className='d-flex justify-content-center'>
        <h1>Timer: {this.state.count}s</h1>
      </div>
    );
  }
}

export default MyComponent;