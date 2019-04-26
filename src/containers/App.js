import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../actions'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import InactiveModal from '../components/InactiveModal'

const App = ({ isOpen, closeModal }) => (
  <div>
    <InactiveModal isOpen={isOpen} handleCloseModal={closeModal}/>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

const mapStateToProps = ({modal}) => ({
  isOpen: modal.open,
})

export default connect(
  mapStateToProps,
  { closeModal }
)(App)
