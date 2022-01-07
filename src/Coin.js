import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1 title='Name'>{name}</h1>
          <p className='coin-symbol' title='Symbol'>
            {symbol}
          </p>
        </div>

        <div className='coin-data'>
          <p className='coin-price' title='Price'>
            &euro;{price}
          </p>
          <p className='coin-volume' title='Coin Volume'>
            {' '}
            &euro;{volume.toLocaleString()}
          </p>
          {priceChange < 0 ? (
            <p className='coin-percent red' title='Coin Percent'>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className='coin-percent green' title='Coin Percent'>
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className='coin-marketcap' title='Coin Marketcap'>
            Mkt Cap: &euro;{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
