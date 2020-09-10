import React from "react";

class VegetablePage extends React.Component {
  state = {
    displayVeggie: null,
    likes: 0,
    count: 0
  };

  componentDidMount() {
    fetch("http://localhost:3000/vegetable")
      .then((r) => r.json())
      .then((veg) => this.setState({ displayVeggie: veg }));
  }

  incrementLikes= () => {
    let newLikes = this.state.likes + 1
    this.setState({
      likes: newLikes
    })


  }

  incrementCount= () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
    }
        // likesHandler = (id, likes) => {
        //     let updatedLike = {
        //       method: 'PATCH',
        //       headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //       },
        //       body: JSON.stringify({
        //         likes: likes + 1
        //       })
        //     }
        //     fetch(`http://localhost:3000/vegetable/${id}`, updatedLike)
        //     .then(resp => resp.json())
        //     .then(newLikes => {
        //       let newerLikes = this.state.likes
        //        this.setState({likes: newLikes})
        //     })
        //   }

  render() {
    let veggieId = this.props.match.params.id;

    let veggieToDisplay = this.props.veggies.find(
      (veg) => veg.id === parseInt(veggieId)
    );

    return (
      <div>
        {veggieToDisplay ? (
          <>
            <div class="veggie-title">
              <h1>{veggieToDisplay.name}</h1>
              <img
                style={{ width: "200px", height: "100px" }}
                src={veggieToDisplay.image}
                alt={veggieToDisplay.name}
              />
            </div>
            <br></br>
            <div class="nutrition">
              <h2>Why {veggieToDisplay.name} is good for you!</h2>
              <h4>{veggieToDisplay.facts}</h4>
            </div>
            <div class="recipe">
              <div class="first-recipe">
                <h2>{veggieToDisplay.recipes[0].title}</h2>
                <h3>Ingridients</h3>
                <h4>{veggieToDisplay.recipes[0].ingredients}</h4>
                <h3>Instructions</h3>
                <h4>{veggieToDisplay.recipes[0].instructions}</h4>
                <button onClick={this.incrementLikes} class="ui classic blue button">{this.state.likes} Likes </button>
              </div>
              <div class="second-recipe">
                <h2>{veggieToDisplay.recipes[1].title}</h2>
                <h3>Ingridients</h3>
                <p>{veggieToDisplay.recipes[1].ingredients}</p>
                <h3>Instructions</h3>
                <p>{veggieToDisplay.recipes[1].instructions}</p>
                <button onClick={this.incrementCount}class="ui classic blue button">
                  {this.state.count} Likes</button>
              </div>
            </div>
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default VegetablePage;
