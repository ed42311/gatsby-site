import React from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import ReactModal from 'react-modal'

import { 
  handleModalClose,
}  from '../store/actions'

const CatModal = ({ isModalOpen, handleModalClose }) => {
  return (
    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Example Modal In Gatsby"
    >
        <h2>Donate</h2>
        <button onClick={handleModalClose}>Close Modal</button>
    </ReactModal>
  )
}

CatModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
}

const mapStateToProps = ({ isModalOpen }) => {
  return { isModalOpen }
}

const mapDispatchToProps = dispatch => {
  return { 
    handleModalClose: () => dispatch(handleModalClose()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatModal);