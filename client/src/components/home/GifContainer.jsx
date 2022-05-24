import React, { useState, useEffect } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'

import Cross from '../../assets/svg/Cross'


export default function GifContainer(props) {
  const [searchValue, setSearchValue] = useState('')
  const [gifList, setGifList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY)
  
  useEffect(() => {
    if (searchValue === '') return getTrandingGif()
    getGifs()
  }, [searchValue])
  
  const getTrandingGif = async _ => {
    setIsLoading(true)
    const { data: gifs } = await gf.trending({ limit: 20 })
    setGifList(gifs)
    setIsLoading(false)
    
  }
  const getGifs = async _ => {
    setIsLoading(true)
    const { data: gifs } = await gf.search(searchValue, { sort: 'relevant', limit: 20 })
    setGifList(gifs)
    setIsLoading(false)
  }
  
  return (
    <div className="gif-wrapper">
      <div className="gif-container">
        <span className='close-container' onClick={() => props.hideContainer()}><Cross /></span>
        
        <div className="search-input">
          <input
          placeholder='Rechercher un GIF...'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>

        <div className="gif-list">
          { 
            isLoading ?
              <p className="loading">Chargement...</p>
            :
            gifList.map((gif, index) => {
              return <div className="gif" style={{ width: gif.images.fixed_width.width + 'px', height: gif.images.fixed_width.height + 'px'}} key={index}>
                <div onClick={() => props.selectedGif(gif)} className="front-div" style={{ width: gif.images.fixed_width.width + 'px', height: gif.images.fixed_width.height + 'px'}}></div>
                <iframe
                  src={gif.embed_url}
                  title={gif.title}
                  frameBorder='0'
                  width={gif.images.fixed_width.width}
                  height={gif.images.fixed_width.height}
                />
              </div>
            }) }
        </div>
      </div>
    </div>
  )
}