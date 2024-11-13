import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteHistory, getHistory } from '../services/allAPI'



function History() {

  const [video, setVideo] = useState([])
  const [history, setHistory] = useState('')

  const getVideo = async () => {
    try {
      const result = await getHistory()
      console.log(result)
      setVideo(result.data);

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getVideo()
  }, [history])




  const removeVideo = async (videId) => {
    // api call
    try {
      await deleteHistory(videId)
      // delete from same component. so getvideo called
      getVideo()
      // const result = await deleteHistory(videId)
      // setHistory(result.data)
      // console.log(history);

      // console.log(result)
      // console.log('delete');
      // setDeleteCard(result.data)


    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <div className='mt-5 container d-flex justify-content-between'>
        <div>watch history</div>

        <Link to={'/Home'} style={{ textDecoration: 'none' }}>back to home</Link>
      </div>

      <div className='d-flex table-responsive container align-items-center m-2 row'>
        <Table striped bordered hover className='mt-5 '>

          <thead>

            <tr>
              <th>id</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Date time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              // video.length>0?
              // array nte index (key)
              video?.map((vi, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{vi.caption}</td>
                    <td><td>
                      <a href={vi.utubUrl} target='_blank'>{vi.utubUrl}</a>
                    </td></td>
                    <td>{vi.formattedDate}</td>
                    <td>{<button onClick={() => removeVideo(vi?.id)} className='btn'><i class="fa-solid fa-trash" style={{ color: 'orange', backgroundColor: 'black' }}></i></button>
                    }</td>
                  </tr>
                )


              })
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}
export default History