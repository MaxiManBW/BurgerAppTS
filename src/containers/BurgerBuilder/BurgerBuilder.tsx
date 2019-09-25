import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

interface Props {

}
interface State {

}

export default class BurgerBuilder extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    )
  }
}
