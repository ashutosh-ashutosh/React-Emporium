import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">
            Description
          </div>
          <div className="descriptionbox-nav-box fade">
            Reviews (122)
          </div>
        </div>
        <div className="descriptionbox-description">
          <p>
          The e-commerce emporium of clothes stands as a vibrant digital marketplace, offering an extensive array of apparel to cater to diverse tastes and preferences. 
          With its virtual shelves brimming with fashionable garments, ranging from trendy streetwear to timeless classics, the emporium provides a one-stop destination for shoppers seeking style, comfort, and convenience. 
          </p>
          <p>
          With an emphasis on quality, affordability, and customer satisfaction, the e-commerce emporium of clothes continues to redefine the modern shopping landscape, empowering individuals to express their unique identities through curated fashion choices.
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox