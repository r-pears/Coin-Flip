import React, { useState } from 'react';
import Coin from './Coin';
import './Coin.css'
import { choice } from './helpers';

const CoinContainer = (props) => {
  const [coin, setCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  handleClick = () => {
    newCoin = choice(props.coins);
    setCoin(newCoin);
    newCoin.side === 'head' ? setHeadCount(count => count + 1) : setTailCount(count => count + 1);
  };

  const currentCoin = coin && (
    <Coin side={coin.side} imgSrc={coin.imgSrc} />
  );

  return (
    <div className='CoinContainer'>
      <h2>Let's flip a coin</h2>
      {currentCoin}
      <button onClick={handleClick}>Flip Me!</button>
      <p>
        Out of {headCount + tailCount} flips, there have been {headCount} heads
        and {tailCount} tails.
      </p>
    </div>
  );
}

CoinContainer.defaultProps = {
  coins: [
    {
      side: "head",
      imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
    },
    {
      side: "tail",
      imgSrc: "https://tinyurl.com/react-coin-tails-jpg"
    }
  ]
};

export default CoinContainer;