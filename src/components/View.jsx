import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCards from './VideoCards'
import { addVideo, getAllVideos, getSingleCategory, updateVideo } from '../services/allAPI'



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

  const dragOverView=(e)=>{
    e.preventDefault()
  }


  const handleCategory=async(e)=>{
    const {videoDetails, categoryId}=JSON.parse(e.dataTransfer.getData("sharedData"))

    console.log(videoDetails, categoryId);

    try{
      const {data}=await getSingleCategory(categoryId)
      console.log(data)

      const selectedVideodDetails = data.allVideos.filter(video=>video.id!=videoDetails.id)
      console.log(selectedVideodDetails)

      const {id,categoryName}=data
      const categoryResult= await updateVideo(categoryId,{id,categoryName,allVideos:selectedVideodDetails})


      await addVideo(videoDetails)
      getAllVideo()



    }catch(er){
      console.log(er)
    }


  }
// json.parse = convert string to object

  // optional chaning operator ?.
  return (
    <>
      <Row className='m-3 border border-info' droppable={true} onDrop={(e) => handleCategory(e)} onDragOver={(e) => dragOverView(e)}>
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