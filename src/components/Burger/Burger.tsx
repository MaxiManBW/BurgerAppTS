import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

interface Props {
  ingredients: {
    [ingredient: string]: number
  }
}

const burger: React.FC<Props> = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey: string) => {
      return [...Array(props.ingredients[igKey])].map(( i => {
        return <BurgerIngredient key={igKey+i} type={igKey} />
      }))
    })
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
