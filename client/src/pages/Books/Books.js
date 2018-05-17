import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Foods extends Component {
  state = {
    books: [],
    title:"",
    author:"",
    carbs:"",
    proteins:"",
    fats:"",
    synopsis:""
    
  };

  componentDidMount() {
    this.loadFoods();
  }

  loadBooks = () => {
    API.getFoods()
      .then(res =>
        this.setState({ 
          books: res.data, 
          title:"", 
          author:"", 
          carbs:"",
          proteins:"",
          fats:"",
          synopsis:"" })
      )
      .catch(err => console.log(err));
  };

  deleteFood = id => {
    API.deleteBook(id)
      .then(res => this.loadFoods())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.week && this.state.day) {
      API.saveBook({
        title: this.state.week,
        author: this.state.day,
        carbs: this.state.carbs,
        proteins: this.state.proteins,
        fats: this.state.fats,
        synopsis: this.state.journal
      })
        .then(res => this.loadFoods())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Daily Food Intake</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="week"
                placeholder="Week (required)"
              />
              <Input
                value={this.state.day}
                onChange={this.handleInputChange}
                name="day"
                placeholder="Day (required)"
              />
              <Input
                value={this.state.carbs}
                onChange={this.handleInputChange}
                name="carbs"
                placeholder="Carbs (required)"
                />
                <Input
                value={this.state.proteins}
                onChange={this.handleInputChange}
                name="proteins"
                placeholder="Proteins (required)"
              />
              <Input
                value={this.state.fats}
                onChange={this.handleInputChange}
                name="fats"
                placeholder="Fats (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="journal"
                placeholder="Food Journal (required)"
              
              />
              <FormBtn
                disabled={!(this.state.day && this.state.week)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Food Log</h1>
            </Jumbotron>
            {this.state.foods.length ? (
              <List>
                {this.state.foods.map(food => (
                  <ListItem key={book._id}>
                    <Link to={"/foods/" + food._id}>
                      <strong>
                        {food.week} - {food.day}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteFood(food._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Foods;
