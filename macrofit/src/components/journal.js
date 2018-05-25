import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import API from "./utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input, TextArea, FormBtn } from "./Form";

class Foods extends Component {

  state = {

    foods: [],

    week:"",

    day:"",

    carbs:"",

    proteins:"",

    fats:"",

    journal:""

    

  };



  componentDidMount() {

    this.loadFoods();

  }



  loadFoods = () => {

    API.getFoods()

      .then(res =>

        this.setState({ 

          foods: res.data, 

          week:"", 

          day:"", 

          carbs:"",

          proteins:"",

          fats:"",

          journal:"" })

      )

      .catch(err => console.log(err));

  };



  deleteFood = id => {

    API.deleteFood(id)

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

      API.saveFood({

        week: this.state.week,

        day: this.state.day,

        carbs: this.state.carbs,

        proteins: this.state.proteins,

        fats: this.state.fats,

        journal: this.state.journal

      })

        .then(res => this.loadFoods())

        .catch(err => console.log(err));

    }

  };



  render() {

    return (

      <div style={{'background': "url(https://www.bing.com/th?id=OIP.8oe2dNxTUvzUEO_dB1x2EwHaFX&w=293&h=204&c=7&o=5&dpr=2&pid=1.7) no-repeat center center fixed",

      "-webkit-background-size": "cover",

      "-moz-background-size": "cover",

     "-o-background-size": "cover",

      "background-size": "cover", "height": "100%"}}>

      <Container>

        <Row>

          <Col size="md-6">

            <h1>Daily Food Intake</h1>

            <form>

              <Input

                value={this.state.week}

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

                value={this.state.journal}

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

              <h1>Food Log</h1>

            {this.state.foods.length ? (

              <List>

                {this.state.foods.map(food => (

                  <ListItem key={food._id}>

                    <Link to={"/journal/" + food._id}>

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

      </div>

    );

  }

}



export default Foods;