import { useEffect, useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCategory, getCategory, getSingleVideo, saveCategory, updateVideo } from '../services/allAPI'


function Category() {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  console.log(categoryName);
  console.log(allCategory);
  



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    getAllCategor()
  },[])

  const handleAddCategory = async () => {
    if (categoryName) {
      // do api
      try {
        const result = await saveCategory({ categoryName, allVideos: [] })
        console.log(result);
        getAllCategor()
        toast.success("New Category list added")
        handleClose()

      } catch (err) {
        console.log(err);

      }
    } else {
      toast.warning('enter the category')
    }
  }

  // get categoryname

  const getAllCategor = async () => {
    try {
      const result = await getCategory()
      setAllCategory(result.data)
    } catch (err) {
      console.log(err);

    }
  }


  const delcategr=async(id)=>{
    try{
      await deleteCategory(id)
    getAllCategor()
    toast.warning("You have deleted a category list ")
    }catch(err){
      console.log(err);
      
    }
  }


  // when dropp
  const videoDropped=async(e,categoryId)=>{
    console.log(`category id : ${categoryId}`);
    const videoId=e.dataTransfer.getData("videoId")
    console.log(`drag startedw with id : ${videoId} and dropped in category id :${categoryId}`)

    // access dropped video details
    const {data}=await getSingleVideo(videoId)
    console.log(data)

    // push to allviedeos (dropped video)
    // find category from allcategory
    const selectedCategory = allCategory.find(f=>f.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory)

    await updateVideo(categoryId,selectedCategory)
    getCategory()
  }

  // to prevent refresh
  const dragOverStart=(e)=>{
    e.preventDefault()
    
  }


  return (
    <>
      <div className='container border border-warning p-3'>
        <div className='d-flex'>
          <h3>Category</h3>
          <button onClick={handleShow} className='btn btn-info m-1' style={{ height: '40px' }}><i class="fa-solid fa-plus" style={{ color: 'white', height: '10px' }}></i></button>

        </div>
        <div className='container-fluid mt-3'>
          {
            allCategory.length>0?
            allCategory?.map((item)=>(
              <div droppable={true} onDrop={(e)=>videoDropped(e, item.id)} onDragOver={(e)=>dragOverStart(e)} className='border border-3 border-light mb-3 d-flex justify-content-between p-3'>
                <h5>{item?.categoryName}</h5>
                <button onClick={()=>delcategr(item?.id)} className='btn'><i className="fa-solid fa-trash" style={{color: "#c61906",fontSize:"20px"}} /></button>
              </div>
              
            ))
            :
            <div className='text-danger'>No Category added</div>
          }
        </div>
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"j
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Category details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='border border-3 border-info p-3 rounded'>
                <FloatingLabel controlId="floatingInput" label="Video" className="mb-3" >

                  <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
                </FloatingLabel>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                close
              </Button>
              <Button variant="info" onClick={handleAddCategory}>Add</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="light"

        />

      </div>




    </>
  )
}

export default Category