import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCards from './VideoCards'
import { getAllVideos } from '../services/allAPI'


function View({addVideoResponse,dltVideo}) {

  const [allVideos, setAllVideos] = useState([])
  const [countVideo, setCount] = useState(0)

  const [deleteCard, setDeleteCard]=useState('')

  useEffect(() => {
    getAllVideo()

    console.log(getAllVideo)

  }, [addVideoResponse,deleteCard,dltVideo])

  console.log(allVideos)
  console.log(countVideo)

  // create new function .because in react hooks that not allowed async await 

  // useEffect(()=>{

  // },[deleteCard])


  const getAllVideo = async () => {
    try {
      const result = await getAllVideos()
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        setAllVideos(result.data)
        setCount(countVideo + 1)
      }

    } catch (error) {
      console.log(error)
    }

  }



  const deleteVideo= async()=>{
    try {

      
    } catch (err) {
      console.log(err);
      
    }
  }


  // optional chaning operator ?.
  return (
    <>
      <Row className='m-3 border border-info '>
        {
          allVideos.length > 0
          
          ? 

          allVideos?.map(video => (
            <Col key={video?.id} lg={6} md={4} sm={12}>
              <VideoCards displayData ={video} setDeleteCard={setDeleteCard}/>
            </Col>
          ))

            :
            <div className='text-danger fw-bold fs-3'>Nothing to display</div>
        }



      </Row>
    </>
  )
}

export default View