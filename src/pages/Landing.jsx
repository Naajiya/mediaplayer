import React from 'react'
import { Link } from 'react-router-dom';
import landingImg from '../assets/music.gif'
import compImg from '../assets/comp.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import histImga from '../assets/historrr.png'
import foldImga from '../assets/folderstwo.png'



function Landing() {
  return (

    <>



      <div className='container'>
        <div className='row m-2'>
          <div className='col-lg-6 col-sm-12 text-align-center justify-content-center'>
            <div style={{ marginTop: '30%', marginBottom: '30%' }}>
              <h3>Welocome to Media Player</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet ex ea qui aspernatur atque, sapiente excepturi adipisci provident mollitia, eius odio veniam sint reprehenderit quaerat fugiat iste nemo voluptates.</p>
              <Link to={'/home'} class="btn btn-secondary">Start</Link>
            </div>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <img className='img-fluid' src={landingImg} alt="Landing Image" />
          </div>
        </div>




     <div className='container'>
          <div className='row d-flex text-align-center justify-content-evently'>
            <div className='col m-3-sm-12 col-lg-4 mb-5'>
              <Card className='p-2 m-3' style={{ width: '18rem', backgroundColor: 'white', color: 'black' }}>
                <Card.Img variant="top" src={compImg} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    Users can Upload, view and remove the vedeos
                  </Card.Text>
  
                </Card.Body>
              </Card>
            </div>
            <div className='col-sm-12 col-lg-4 mb-5'>
              <Card className='p-2 m-3'  style={{ width: '18rem', backgroundColor: 'white', color: 'black' }}>
                <Card.Img variant="top" src={foldImga} />
                <Card.Body>
                  <Card.Title>Categorize Video videos</Card.Title>
                  <Card.Text>
                    Users can Upload, view and remove the vedeos
                  </Card.Text>
  
                </Card.Body>
              </Card>
            </div>
            <div className='col-sm-12 col-lg-4 mb-5'>
              <Card className='p-2 m-3' style={{ width: '18rem', backgroundColor: 'white', color: 'black' }}>
                <Card.Img variant="top" src={histImga} />
                <Card.Body>
                  <Card.Title>Watching History</Card.Title>
                  <Card.Text>
                    Users can Upload, view and remove the vedeos
                  </Card.Text>
  
                </Card.Body>
              </Card>
            </div>
          </div>
     </div>


        <div className='container mt-5'>
          <div className='row border border-white'>
            <div className='col'>
              <h3 className='m-3 text-warning text-align-center'>Simple, Fast and powerful</h3>

              <div className='m-5'>
                <div>
                  <div >

                    <p><span className='fw-bold fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, id ipsum! Quod cum fuga eaque sunt </p></div>
                </div>
                <div>
                  <div >

                    <p><span className='fw-bold fs-5'>Categorize video:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, id ipsum! Quod cum fuga eaque sunt </p></div>
                </div>
                <div>
                  <div >

                    <p><span className='fw-bold fs-5'>Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, id ipsum! Quod cum fuga eaque sunt </p></div>

                </div>
              </div>

            </div>
            <div className='col mt-5 align-items-center justify-content-center img-fluid'>
              <div className=' align-items-center justify-content-center img-fluid'>
                <iframe width="340" height="315" src="https://www.youtube.com/embed/VNMs0hniZSE?si=sdsNky-VqPGi2XQq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}




export default Landing