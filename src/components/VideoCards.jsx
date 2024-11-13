import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../services/allAPI';






function VideoCards({ displayData, setDeleteCard }) {
  console.log(displayData);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  // when a video play to pass caption utuburl formattedDate to history 
  const handleShow = async () => {

    const { caption, utubUrl } = displayData

    const date = new Date();
    console.log(date);

    const formattedDate = date.toLocaleString();
    console.log(formattedDate);

    const historyData = { caption, utubUrl, formattedDate }
    console.log(historyData);

    try {
      await saveHistory(historyData)
    } catch (err) {
      console.log(err)
    }

    setShow(true)
  };





  const handleRemoveVideo = async (videId) => {
    // api call
    try {

      const result = await deleteVideo(videId)

      console.log(result)
      console.log('delete');
      setDeleteCard(result.data)


    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Card className='m-2' style={{ width: '13rem', height: '300px' }}>
        <Card.Img onClick={handleShow} style={{ height: '220px', padding: '3%' }} variant="top" src={displayData?.imageUrl} />
        <Card.Body>
          <Card.Title className='d-flex align-items-center justify-content-between'>
            <p>{displayData?.caption}</p>
            <button onClick={() => handleRemoveVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash" style={{ color: 'orange', backgroundColor: 'black' }}></i></button>
          </Card.Title>

        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> {displayData?.caption}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="480" src={`${displayData?.utubUrl}?autoplay=1`} title="Bloody Daddy - Official Trailer | Shahid Kapoor | Diana Penty | Ali Abbas Zafar | Jio Cinema" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCards