import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'




function Home() {

  const [addVideoResponse, setAddVideoResponse]=useState('')
  const [dltVideo,setdltVideo]=useState("")


  return (

    <>
      <div className='container d-flex justify-content-between my-5'>
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link className='text-warning fw-bold' style={{ textDecoration: 'none' }} to='/history'>Watch History</Link>
      </div>

      <div className="row container-fluid my-5">
        <div className="col-lg-6">
          <View addVideoResponse={addVideoResponse} dltVideo={dltVideo}/>
        </div>
        <div className="col-lg-6">
          <Category setdltVideo={setdltVideo} />
        </div>
      </div>
    </>
  )
}

export default Home