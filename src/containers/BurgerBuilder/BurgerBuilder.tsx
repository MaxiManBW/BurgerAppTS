import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

interface Props {

}
interface State {

}

export default class BurgerBuilder extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    )
  }
}
