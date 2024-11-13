import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../services/allAPI';



function Add({setAddVideoResponse}) {
  // array drawback - accessing troubility
  const [videodatails, setVideoDetails] = useState({ caption: '', imageUrl: '', utubUrl: '' })
  const [show, setShow] = useState(false);
  const [invalid, setInvalid] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(videodatails);

  const getEmbedUrl = (link) => {
    if (link.includes('v=')) {
      let videId = link.split('v=')[1].slice(0, 11)
      console.log(videId);

      setVideoDetails({ ...videodatails, utubUrl: `https://www.youtube.com/embed/${videId}` })
      setInvalid(false)
    } else {
      setVideoDetails({ ...videodatails, utubUrl: '' })
      setInvalid(true)
    }
  }


// run time error handle - try catch
  const handleUpload =async () => {
    const { caption, imageUrl, utubUrl } = videodatails

    if (caption && imageUrl && utubUrl) {

     try{

      const result = await addVideo(videodatails)
      console.log(result);
      
// update function it come from home.js its a state updating function
      setAddVideoResponse(result.data)

      toast.success(`${result.data.caption} is added to your collection`)
      handleClose()

     }catch(err){

      console.log(err);
      
     }
    } else {
      // alert('fill input fields')
      toast.warning('fill input fields')
    }
  }


  return (
    <>
      <div className="container d-flex align-items-center">
        <button onClick={handleShow} className='btn btn-info ms-3'><i class="fa-solid fa-plus" style={{ color: 'white' }}></i></button>
        <h6>Upload new video</h6>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add video </Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <p>please fill the following details</p>
            <div className='border border-3 border-info m-4 p-3'>
              <FloatingLabel
                controlId="floatingInput"
                label="Video"
                className="mb-3"
              >
                <Form.Control onChange={(e) => setVideoDetails({ ...videodatails, caption: e.target.value })} type="email" placeholder="Video capion" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputImage"
                label="Image url"
                className="mb-3"
              >
                <Form.Control onChange={e => setVideoDetails({ ...videodatails, imageUrl: e.target.value })} type="email" placeholder="Image URL" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputUrl"
                label="Youtuble Url"
                className="mb-3"
              >
                <Form.Control onChange={e => getEmbedUrl(e.target.value)} type="email" placeholder="Youtube URL" />

              </FloatingLabel>
              {
                invalid && <p>invalid url</p>
              }

            </div>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              cancel
            </Button>
            <Button onClick={handleUpload} variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="light"

        />

      </div>
    </>
  )
}

export default Add