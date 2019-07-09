import React from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import ReactModal from 'react-modal'

import { 
  handleModalOpen,
}  from '../store/actions'

const ModalOpenBtn = ({ handleModalOpen }) => {
  return (
    <button onClick={handleModalOpen}>
      Open Modal
    </button>
  )
}

ModalOpenBtn.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return { 
    handleModalOpen: () => dispatch(handleModalOpen()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalOpenBtn);