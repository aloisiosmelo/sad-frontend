import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Modal, Button } from 'react-bootstrap';


export default function FullscreenModal(
  props
) {
    const isFullscreen = props.fullscreen
    const modalTitle = props.modalTitle
    const modalBody = props.modalBody

    const [fullscreen, setFullscreen] = useState(isFullscreen);
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalBody()}</Modal.Body>
        </Modal>
      </>
    );
  }
  