import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>ALBUMS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f8/5a/79/f85a79d4-e040-4716-ca84-5cfcb5fe18ac/artwork.jpg/486x486bb.png'
              text='Apocalypse Planet Loops - 2020'
              label='Album'
              path='/sign-up'
            />
            <CardItem
              src='https://i.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaWhyLWluZ2VzdGlvbi1waXBlbGluZS1wcm9kdWN0aW9uLWRpc3Ryb2tpZC8yMDIwMTAyNDAxMTYwNDQ0NC8xOTU3NTU1OTU3OTMvcmVzb3VyY2VzLzE5NTc1NTU5NTc5My5qcGc=?ops=fit(480%2C480)'
              text='Over & Over - 2020'
              label='Album'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://lite-images-i.scdn.co/image/ab67616d00001e020b1fa0886d758266671593fa'
              text='Practice - 2021'
              label='Album'
              path='/sign-up'
            />
            <CardItem
              src='https://i1.sndcdn.com/artworks-uOh69n5vZw4OAyCQ-0kPnNg-t200x200.jpg'
              text='2049-9019 - 2020'
              label='Album'
              path='/sign-up'
            />
            <CardItem
              src='https://images-na.ssl-images-amazon.com/images/I/51ek2GZUcbL._SY445_SX342_QL70_ML2_.jpg'
              text='New Amarilla - 2020'
              label='Album'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
