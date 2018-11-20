import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
    <Modal show={ props.show } className="confirmmodal component">
      <Modal.Header className="modal-header">
        <Modal.Title className="modal-title">{ props.title ? props.title : 'Confirm'}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        <p className="modal-message">{ props.content }</p>
      </Modal.Body>

      <Modal.Footer className="modal-footer">
        <Button
          onClick={ props.handleCancel }
          className="modal-cancel button exit"
        >
          { props.btnLabelCancel ? props.btnLabelCancel : 'Cancel' }
        </Button>
        <Button
          onClick={ props.handleOk }
          className="modal-ok button danger"
        >
          { props.btnLabelOk ? props.btnLabelOk : 'OK' }
        </Button>
      </Modal.Footer>
    </Modal>
);

export default ConfirmModal;
