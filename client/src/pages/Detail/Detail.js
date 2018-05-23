import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    food: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getFood(this.props.match.params.id)
      .then(res => this.setState({ food: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={{'background': "url(https://www.ten.co.uk/wp-content/uploads/2015/02/phy19-what-london-joggers-can-learn-from-the-ultramarathon-runners.jpg) no-repeat center center fixed",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
     "-o-background-size": "cover",
      "background-size": "cover", "height": "100vh"}}>
      <Container fluid>
        <Row>
          <Col size="md-12">
              <h1>
                {this.state.food.week} - {this.state.food.day}
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Food Journal</h1>
    
              Foods: {this.state.food.journal}
              <ul>
                <li>Carbs {this.state.food.carbs} grams </li>
                <li>Proteins {this.state.food.proteins} grams </li>
                <li>Fats {this.state.food.fats} grams </li>
              </ul>
              
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Log</Link>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Detail;
