import './Quick.css'; 
import {AiOutlineStock} from 'react-icons/ai'
import {GiTakeMyMoney, GiGecko} from 'react-icons/gi'
import {GoGraph} from 'react-icons/go'
import {TbSquareLetterM} from 'react-icons/tb'
import {FaRobot,FaDiscord} from 'react-icons/fa'


export default function Quick () {

  return (
    <div className='quick-container'>
      <div className='quick-title'> 
        <h1>QUICK LINKS</h1>
      </div>
      <div className='btn-container'>
        <button className='btn'>
          <GiTakeMyMoney/> BUY DEGENGPT</button>
        <button className='btn'>
        <AiOutlineStock/>  CHART</button>
      </div>
      <div className='btn-container'>
        <button className='btn'>
          <GiGecko/> COINGECKO</button>
        <button className='btn'>
          <GoGraph/> ETHERSCAN</button>
        <button className='btn'>
          <TbSquareLetterM/> COINMARKETCAP</button>
      </div>
      <div className='btn-container'>
      <button className='btn'>
        <FaRobot/> ADD DEGENGPT - TELEGRAM</button>
      <button className='btn'>
        <FaDiscord/> ADD DEGENGPT - DISCORD</button>
      </div>
    </div>
  )
}