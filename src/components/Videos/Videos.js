import Video from './../Video/Video';
import {useState} from 'react';

function Videos (){

    const videos = [
      { 
        videoId: 'OmLNs6zQIHo',
        title: 'people help the people',
      },
      { 
        videoId: 'WJTXDCh2YiA',
        title: 'wings',
      },
      { 
        videoId: '6K25KhCq7p8',
        title: 'second hand news',
      },
    ]
    
    const [idOfDisplayedVideo, setIdOfDisplayedVideo ] = useState(0);
    
    return (
        <div className="video-section">
            <h4>Listen some of her songs.</h4>
            <div className="videos">
              <div className="videos-main">
                <div className="videos-wrapper"> 
                     <iframe 
                    src={`https://www.youtube.com/embed/${videos[idOfDisplayedVideo].videoId}`} 
                    title={videos[idOfDisplayedVideo].title} 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div className="videos-list">
                {videos.map((item, index)=>(
                    <Video 
                    id={index}
                    videoId={item.videoId} 
                    title={item.title} 
                    setIdOfDisplayedVideo={setIdOfDisplayedVideo}
                    />
                ))
                }
              </div>
            </div>
          </div>
    )
}

export default Videos;