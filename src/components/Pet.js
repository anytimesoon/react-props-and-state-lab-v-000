import React from 'react'

class Pet extends React.Component {
  constructor(props){
    super()

    this.id = props.pet.id
    this.gender = props.pet.gender
    this.age = props.pet.age
    this.name = props.pet.name
    this.type = props.pet.type
    this.weight = props.pet.weight
    this.isAdopted = props.pet.isAdopted

    this.alreadyAdoptedBtn = <button className="ui disabled button">Already adopted</button>
    this.adoptBtn = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.id)}>Adopt pet</button>
  }

  render() {

    return (

      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.gender === 'male' ? '♂' : '♀' }
            {this.name}
          </a>
          <div className="meta">
            <span className="date">{this.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.age}</p>
            <p>Weight: {this.weight}</p>
          </div>
        </div>
        <div className="extra content">
          
          {this.isAdopted ? this.alreadyAdoptedBtn : this.adoptBtn}
          
        </div>
      </div>
    )
  }
}

export default Pet
