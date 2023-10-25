import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const images = [
    "https://i.imgur.com/0r579S4.jpg",
    "https://i.imgur.com/UdpgmWq.jpg",
    "https://i.imgur.com/fuYVqpf.jpg",
    "https://i.imgur.com/V9jo58A.jpg",
    "https://i.imgur.com/URaMms2.jpg",
    "https://i.imgur.com/L2MFX1E.jpg",
    "https://i.imgur.com/h9i4tmu.jpg",
    "https://i.imgur.com/TqYfeLK.jpg",
    "https://i.imgur.com/MwX8twi.jpg",
    "https://i.imgur.com/TjzO1Bf.jpg",
    "https://i.imgur.com/WWncDo5.jpg",
    "https://i.imgur.com/uvRhGjl.jpg",
    "https://i.imgur.com/f9bZgls.jpg",
    "https://i.imgur.com/07zhgQr.jpg",
    "https://i.imgur.com/yjxnCtp.jpg",
    "https://i.imgur.com/tKHBRpV.jpg",
    "https://i.imgur.com/ycC2725.jpg",
    "https://i.imgur.com/k4zr3UJ.jpg",
    "https://i.imgur.com/WiFq9T9.jpg",
    "https://i.imgur.com/fyfDIn8.jpg",
    "https://i.imgur.com/1n54xlQ.jpg",
    "https://i.imgur.com/zAuZThY.jpg",
    "https://i.imgur.com/ZeHuyef.jpg",
    "https://i.imgur.com/eRxnZvr.jpg",
    "https://i.imgur.com/x9MRtEi.jpg",
    "https://i.imgur.com/wqfn9ye.jpg",
    "https://i.imgur.com/c4WZTIN.jpg",
    "https://i.imgur.com/R8mwNry.jpg",
    "https://i.imgur.com/CABL0HH.jpg",
    "https://i.imgur.com/kqOYRED.jpg",
    "https://i.imgur.com/vCjKhge.jpg",
    "https://i.imgur.com/H51GXpK.jpg",
    "https://i.imgur.com/GWC5U49.jpg",
    "https://i.imgur.com/5MnIpND.jpg",
    "https://i.imgur.com/048juU0.jpg",
    "https://i.imgur.com/OxU5K1O.jpg",
    "https://i.imgur.com/IwmlNAo.jpg",
    "https://i.imgur.com/84Mtk7u.jpg",
    "https://i.imgur.com/LluwAdJ.jpg",
    "https://i.imgur.com/MGd5RTn.jpg",
    "https://i.imgur.com/8HIJv9v.jpg",
    "https://i.imgur.com/8MZZ5DY.jpg",
    "https://i.imgur.com/VsbIu6B.jpg",
    "https://i.imgur.com/bfhgiQK.jpg",
    "https://i.imgur.com/pe2upB7.jpg",
    "https://i.imgur.com/bShyYX6.jpg",
    "https://i.imgur.com/7BjCqic.jpg",
    "https://i.imgur.com/uxFYf8a.jpg",
    "https://i.imgur.com/Oo85W3t.jpg",
    "https://i.imgur.com/NQKAWqu.jpg",
    "https://i.imgur.com/99A0bye.jpg",
]

export default function MaidenEdition() {
  return (
    <>
        
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        {/* {data.img &&
                            <div style={{
                                width: '100%',
                                height: '100vh',
                                background: 'black', 
                                position: 'fixed',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',

                            }}>
                                <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} />
                            </div>
                        } */}
                        <div className="col-12 mt-5 pt-4">
                            <h1 className='text-center mb-5 mt-3'>Maiden Edition Gallery</h1>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                            >
                                <Masonry gutter="10px">
                                    {images.map((image, i) => (
                                        <img
                                            key={i}
                                            src={image}
                                            style={{width: "100%", display: "block", cursor: 'pointer'}}
                                            alt=""
                                            // onClick={ () => viewImage(image, i)}
                                        />
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}
