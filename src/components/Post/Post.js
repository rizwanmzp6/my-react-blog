import React from 'react';
import { useHistory } from 'react-router-dom';
import './post-styles.css';
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

export default function Post({
  id,
  url,
  title,
  date,
  onDelete,
  author,
  category,
}) {
  const history = useHistory();

  function handleClick() {
    history.push(`/post/${id}`);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <li id='postAndButton'>
      <div id='postPreview' onClick={handleClick}>
        <img src={url} alt='thumbnail' />
        <h2>{title}</h2>
        <h3>By : "{author}"</h3>
        <h4>Category : {category}</h4>
        <em>{date}</em>
      </div>
      <span id='deleteBtn' onClick={handleDelete} className='social'>
        <img
          src='https://icons-for-free.com/iconfiles/png/512/close+closecancelsquare+cross+delete+remove+square+icon-1320185734508070818.png'
          alt='Delete post'
        />
      </span>
      <span className='social'>
        <TwitterShareButton
          url={url}
          title={title}
          className='Demo__some-network__share-button'
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </span>
      <span className='social'>
        <FacebookShareButton
          url={url}
          title={title}
          className='Demo__some-network__share-button'
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </span>
      <span className='social'>
        <WhatsappShareButton
          url={url}
          title={title}
          className='Demo__some-network__share-button'
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </span>
    </li>
  );
}
