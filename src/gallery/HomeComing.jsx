import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const images = [
    "https://i.imgur.com/4Vi5Ik5.jpg",
    "https://i.imgur.com/FgwyjLP.jpg",
    "https://i.imgur.com/sBWRxA7.jpg",
    "https://i.imgur.com/LwiB3uS.jpg",
    "https://i.imgur.com/sfOM0OT.jpg",
    "https://i.imgur.com/EqREhsj.jpg",
    "https://i.imgur.com/M2PsTbH.jpg",
    "https://i.imgur.com/SDmVe81.jpg",
    "https://i.imgur.com/oAwgL5d.jpg",
    "https://i.imgur.com/kdd86pR.jpg",
    "https://i.imgur.com/XDaRp1Z.jpg",
    "https://i.imgur.com/13foBF3.jpg",
    "https://i.imgur.com/CxlA5tN.jpg",
    "https://i.imgur.com/y7YGHLj.jpg",
    "https://i.imgur.com/JXv5xzc.jpg",
    "https://i.imgur.com/5A9W6iv.jpg",
    "https://i.imgur.com/sCTnbTQ.jpg",
    "https://i.imgur.com/HB2jk7y.jpg",
    "https://i.imgur.com/Nr88bSg.jpg",
    "https://i.imgur.com/cqgam8J.jpg",
    "https://i.imgur.com/HBvLQ5b.jpg",
    "https://i.imgur.com/89IueP5.jpg",
    "https://i.imgur.com/FmUSyut.jpg",
    "https://i.imgur.com/7Xd7uib.jpg",
    "https://i.imgur.com/fFzwGHy.jpg",
    "https://i.imgur.com/gAIKG7Z.jpg",
    "https://i.imgur.com/c1PT2fu.jpg",
    "https://i.imgur.com/Pb6VVph.jpg",
    "https://i.imgur.com/pCrKXEH.jpg",
    "https://i.imgur.com/QKxSHvG.jpg",
    "https://i.imgur.com/gPHZd7X.jpg",
    "https://i.imgur.com/CW0MJ1R.jpg",
    "https://i.imgur.com/2NiFFzo.jpg",
    "https://i.imgur.com/jc9OagA.jpg",
    "https://i.imgur.com/IsXgj5f.jpg",
    "https://i.imgur.com/KIkj0w3.jpg",
    "https://i.imgur.com/gPZkWsO.jpg",
    "https://i.imgur.com/E68jXlR.jpg",
    "https://i.imgur.com/J1NOBX7.jpg",
    "https://i.imgur.com/ToBISXE.jpg",
    "https://i.imgur.com/O60kcy4.jpg",
    "https://i.imgur.com/ctJVuNb.jpg",
    "https://i.imgur.com/9ZIwSsz.jpg",
    "https://i.imgur.com/3LjgT9L.jpg",
    "https://i.imgur.com/6ARNKSR.jpg",
    "https://i.imgur.com/A7g63V3.jpg",
    "https://i.imgur.com/3nqK3xN.jpg",
    "https://i.imgur.com/Pmdwu8k.jpg",
    "https://i.imgur.com/XVJ0XRj.jpg",
    "https://i.imgur.com/hEfohqc.jpg",
    "https://i.imgur.com/Y2BwlXM.jpg",
    "https://i.imgur.com/mm7cUFi.jpg",
    "https://i.imgur.com/Y2W7otX.jpg",
    "https://i.imgur.com/ve6b3ju.jpg",
    "https://i.imgur.com/nhSdXfW.jpg",
    "https://i.imgur.com/mO5ZEYh.jpg",
    "https://i.imgur.com/uaP28NX.jpg",
    "https://i.imgur.com/qjPEe3u.jpg",
    "https://i.imgur.com/cUbqAUZ.jpg",
    "https://i.imgur.com/XQn9PPv.jpg",
    "https://i.imgur.com/jVCsUuT.jpg",
    "https://i.imgur.com/XE06DfC.jpg",
    "https://i.imgur.com/MNEOlgI.jpg",
    "https://i.imgur.com/Il4zU8K.jpg",
    "https://i.imgur.com/eoQiIRR.jpg",
    "https://i.imgur.com/8lW17vK.jpg",
    "https://i.imgur.com/vMAe1oK.jpg",
    "https://i.imgur.com/o1CXSd6.jpg",
    "https://i.imgur.com/wCO9MVb.jpg",
    "https://i.imgur.com/NjFDo3O.jpg",
    "https://i.imgur.com/o6surc4.jpg",
    "https://i.imgur.com/E2N3lwB.jpg",
    "https://i.imgur.com/s8zwa9U.jpg",
    "https://i.imgur.com/qccRGqn.jpg",
    "https://i.imgur.com/ZYAkikS.jpg",
    "https://i.imgur.com/r5Y2Xcu.jpg",
    "https://i.imgur.com/qR4ebep.jpg",
    "https://i.imgur.com/3ffuJnF.jpg",
    "https://i.imgur.com/Wf6pla9.jpg",
    "https://i.imgur.com/VvKXZKH.jpg",
    "https://i.imgur.com/HrppSiV.jpg",
    "https://i.imgur.com/47muZpc.jpg",
    "https://i.imgur.com/qLGVOVq.jpg",
    "https://i.imgur.com/BVtUcdy.jpg",
    "https://i.imgur.com/qCFPtpf.jpg",
    "https://i.imgur.com/1Rl2Fmc.jpg",
    "https://i.imgur.com/g00SLLi.jpg",
    "https://i.imgur.com/JOGG9rP.jpg",
]

export default function HomeComing() {
    // const [data, setData] = useState({img: '', i: 0})

    // const viewImage = (img, i)=>{
    //     setData({img, i})
    // }

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        // When an image has loaded, check if all images have loaded.
        // If all images are loaded, set isLoading to false.
        setIsLoading(false);
    };

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
                            <h1 className='text-center mb-5 mt-3'>Home Coming Gallery</h1>
                            {isLoading && (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100vh',
                                    }}
                                >
                                    Loading...
                                </div>
                            )}
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                            >
                                <Masonry gutter="10px">
                                    {images.map((image, i) => (
                                        <img
                                            key={i}
                                            src={image}
                                            style={{ width: "100%", display: "block", cursor: 'pointer' }}
                                            alt=""
                                            onLoad={handleImageLoad}
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
