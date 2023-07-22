import { InfoOutlined, Place, PlayArrow } from '@material-ui/icons'
import React from 'react'

function Featured() {
  return (
    <div className='featured'>
        <img  src='https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg'/>
        <div className="info">
            <img src   ="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

            <span className='desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eveniet in laboriosam nihil obcaecati molestiae veritatis a nisi quisquam, maxime magni consequatur vitae? Illo hic maxime totam harum velit nemo.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eveniet in laboriosam nihil obcaecati molestiae veritatis a nisi quisquam, maxime magni consequatur vitae? Illo hic maxime totam harum velit nemo.
            </span>
            <div className='button'>
                <button className='play'>
                <PlayArrow/>
                <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured