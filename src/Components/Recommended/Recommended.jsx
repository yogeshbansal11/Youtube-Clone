import './Recommended.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { API_KEY, value_converter } from '../../data';

const Recommended = ({ categoryID }) => {
  const [apidata, setapidata] = useState([]);

  const fetchdata = async () => {
    try {
      const relatedvideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&regionCode=US&videoCategoryId=${categoryID}&key=${API_KEY}`;
      const response = await fetch(relatedvideo_url);
      const data = await response.json();
      setapidata(data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [categoryID]);

  return (
    <div className="recommended">
      {apidata.map((item) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="side-video-list">
          <img src={item.snippet.thumbnails?.medium?.url || ''} alt={item.snippet?.title || 'Thumbnail'} loading="lazy" />
          <div className="vid-info">
            <h4>{item.snippet?.title || 'Title unavailable'}</h4>
            <p>{item.snippet?.channelTitle || 'Channel unavailable'}</p>
            <p>{value_converter(item.statistics?.viewCount || 0)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;

