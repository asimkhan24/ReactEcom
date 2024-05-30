import React from 'react'
import G1 from './GalleryImg/G1.jpg'
import G2 from './GalleryImg/G2.jpg'
import G3 from './GalleryImg/G3.jpg'
import G4 from './GalleryImg/G4.jpg'
import G5 from './GalleryImg/G5.png'
import G6 from './GalleryImg/G6.jpg'

const Gallery = () => {
  return (
   <>
   <div className="mt-4 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold underline uppercase">Gallery</h2>
      </div>
   
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={G3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={G4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G6}/>
        </div>
      </div>
    </div>
  </div>
</section>
   
   
   
   </>
  )
}

export default Gallery