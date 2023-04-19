import './Percent.css'; 

export default function Percent () {

  return (
    <div className='percent-container'>
      <div className='percent-top'>
        <div className='percent-txt'>
          <h1>5 %</h1>
          <h3>Team Vesting</h3>
        </div>
        <div className='percent-txt'>
          <h1>20 %</h1>
          <h3>Staking/CEX Locked</h3>
        </div>
        <div className='percent-txt'>
          <h1>75 %</h1>
          <h3>LP</h3>
        </div>
        
      </div>
        <div className='percent-txt-1'>
          <h1>CONTRACT</h1>
          <h2>contract address</h2>
        </div>
        <div class="divider">
        <div class="line"></div>
        <div class="circle"></div>
        <div class="rectangle"></div>
        <div class="circle"></div>
        <div class="line"></div>
      </div>
    </div>
  )
}