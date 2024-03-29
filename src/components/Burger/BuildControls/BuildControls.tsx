import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]
interface Props {

}

const buildControls: React.FC<Props> = (props) => (
  <div className={classes.BuildControls}>
    { controls.map((ctrl) => {
      return <BuildControl key={ctrl.label} label={ctrl.label} />
    }) }

  </div>
)


export default buildControls
