import React from 'react';
import Modal from 'react-modal';

/* Usage:
* import ConfirmModel from '<path-from-importer-to-ConfirmModal>';
* <Modal
*   show={this.state.showConfirmModal}
*   title='<your-optional-title>'
*   content='<your-required-content>'
*   btnLabelCancel='<your-optional-cancel-btn-label>'
*   btnLabelOk='<your-optional-ok-btn-label>'
*   handleCancel={this.handleCancel}
*   handleOk={this.handleOk}
* />
*/

const ConfirmModal = (props) => (
  <Modal className="confirmmodal component modal-content"
    overlayClassName="modal-overlay"
    isOpen={ props.show }
    role='dialog'
    shouldCloseOnOverlayClick={false}
    contentLabel={ props.title ? props.title : 'Confirm' }
  >
    <h3 className="modal-title">{ props.title ? props.title : 'Confirm' }</h3>
    <p className="modal-message">{ props.content }</p>
    <div className="modal-actions">
      <button onClick={ props.handleCancel } className="modal-cancel button exit">
        { props.btnLabelCancel ? props.btnLabelCancel : 'Cancel' }
      </button>
      <button onClick={ props.handleOk } className="modal-ok button danger">
        { props.btnLabelOk ? props.btnLabelOk : 'OK' }
      </button>
    </div>
  </Modal>
);

export default ConfirmModal;
