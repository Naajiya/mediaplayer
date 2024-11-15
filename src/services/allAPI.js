//  to call all api call

import Category from "../components/Category"
import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

// save video
// save video api called by add.jsx

export const addVideo= async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// api call for get all videos
export const getAllVideos=async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos`,"")
}

// api call for delete vedio card
export const deleteVideo =async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}

export const saveHistory =async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

export const getHistory =async(video)=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,video)
}

export const deleteHistory = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

export const saveCategory =async(catergoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/allcategory`,catergoryDetails)
}

// get all catogory
export const getCategory =async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allcategory`,"")
}

// delete catogory
export const deleteCategory = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allcategory/${videoId}`,{})
}

// get a single video
 export const getSingleVideo=async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,{})
 }


//  get call for updating category

 export const updateVideo = async (CategoryId,catergoryDetails)=>{
    return await commonAPI ("PUT", `${SERVER_URL}/allcategory/${CategoryId}`,catergoryDetails)
 }
