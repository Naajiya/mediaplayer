import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='container border border-light'>
        <div className='d-flex'>
          <h3>Category</h3>
          <button onClick={handleShow} className='btn btn-info m-1' style={{ height: '40px' }}><i class="fa-solid fa-plus" style={{ color: 'white', height: '10px' }}></i></button>

        </div>

        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="TEXT"
                placeholder="enter category name"
                autoFocus 
                className='w-80'
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
        </div>


      </div>




    </>
  )
}

export default Category