import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <>
      <div className='container d-flex '>
        <div className='row'>
          <div className='m-4 col-lg-3 col-sm-12' style={{width: '300px' }}>
            <h5><i class="fa-solid fa-play p-2"></i>Media Plyer</h5>
            <p className='container-fluid'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maxime in, blanditiis sint voluptatem perspiciatis debitis rem perferendis. </p>
            {/* <p>code is liscenssed by luminar</p> */}
          </div>

          <div className='m-4 col-lg-2 col-sm-12'>
            <h5>Links</h5>

            <div className='colum'>
              <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing</Link></div>
              <div> <Link to={'/Home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></div>
              <div><Link to={'/History'} style={{ textDecoration: 'none', color: 'white' }}>watch History</Link></div>
            </div>
          </div>

          <div className='m-4 col-lg-2 col-sm-12'>
            <h5>Guides</h5>
            <div className='colum'>
              <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link></div>
              <div> <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link></div>
              <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>watch History</Link></div>
            </div>
          </div>

          <div className='m-4 col-lg-2 col-sm-12'>
            <h5>Contact Us</h5>
            <div className='d-flex'>
              <input type="email" className='border rounded p-2 m-1' placeholder='enter your mail'style={{height:'40px',fontSize:'13px'}} />
              <button className='btn btn-info me-3'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='d-flex'>
            <a className='p-2' style={{color:'white'}} href=""><i class="fa-brands fa-facebook-f fa-lg"></i></a>
            <a className='p-2'  style={{color:'white'}} href=""><i class="fa-brands fa-x-twitter fa-lg"></i></a>
            <a className='p-2' style={{color:'white'}} href=""><i class="fa-brands fa-square-instagram fa-lg"></i></a>
            <a className='p-2' style={{color:'white'}} href=""><i class="fa-solid fa-phone fa-lg"></i></a>
            <a className='p-2'  style={{color:'white'}} href=""><i class="fa-brands fa-github fa-lg"></i></a>
            <a className='p-2'  style={{color:'white'}} href=""><i class="fa-brands fa-linkedin fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer