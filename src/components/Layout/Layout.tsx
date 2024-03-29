import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'

interface Props {}
const layout: React.FC<Props> = ( props ) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout
