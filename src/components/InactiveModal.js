import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const InactiveModal = ({ isOpen, handleCloseModal  }) => (
    <Modal>
    <div>
        <h3>Are you still there?</h3>
        <button onClick={() => handleCloseModal()}>Close</button>
    </div>
  </Modal>
)

InactiveModal.propTypes = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func
}

export default InactiveModal
