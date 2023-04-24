import "./Meet.css";
// import {FaRobot} from 'react-icons/fa'
import TokenPic from '../token.jpg'


export default function Meet() {

  // <span className="bold"></span>
  return (
    <div className="meet-container">
      <div className="img-container">
      <div className="img-bg-meet" />
          <img src={TokenPic} alt="token pic" className="token-pic" style={{size:'20em', marginTop: '25em'}}/>
      </div>
      <div className="meet-text">
        <h1> Meet DegenGPT</h1>
        <p>
          <span className="bold"> $DegenGPT </span>
           is a revolutionary new token that is set to change the world
          of crypto trading. 
          <br/>
          <br/>
          As utility token for AI-powered products, <span className="bold"> $DegenGPT </span>
          will integrate seamlessly into various token bots and tools, enabling
          traders to make smarter decisions and achieve greater success in the
          volatile crypto market. By harnessing the power of cutting-edge AI
          technology, <span className="bold"> $DegenGPT </span> will be able to analyze vast amounts of data in
          real-time, identifying patterns and trends that would be impossible
          for human traders to detect. This will give <span className="bold"> $DegenGPT </span> holders a
          significant advantage over other traders, allowing them to make more
          informed decisions and stay ahead of the game. 
          <br/>
          <br/>
          In addition to its AI
          capabilities, <span className="bold"> $DegenGPT </span> will also be given a range of important
          utilities as part of our growing ecosystem. These utilities will
          include access to premium features such as advanced trading tools and
          analytics, as well as the ability to deploy funds across various
          tokens and wallets with lightning fast execution time. 
          <br/>
          <br/>
          As <span className="bold"> $DegenGPT </span> is
          spent across these premium tools, the token will be burned, deflating
          the total supply and increasing its scarcity. This will help to drive
          up the value of <span className="bold"> $DegenGPT </span> over time, making it an attractive
          investment for traders and investors alike.
          <br/>
          <br/>
          We are excited to roll out
          <span className="bold"> $DegenGPT </span> and to see how it will transform the world of crypto trading
          in the years to come. With its powerful AI capabilities and wide range
          of utilities, we believe that <span className="bold"> $DegenGPT </span> has the potential to
          revolutionize the way that traders and investors approach the market,
          making it easier and more profitable than ever before. With <span className="bold"> $DegenGPT </span>
          you will never miss another 1000x.
          <br/>
          <br/>
          Ready to get started? Add<span className="bold"> $DegenGPT </span> to your Discord or Telegram today!
          🚀
        </p>
        <div className="btn-container-meet">
          {/* <button className="btn"> <FaRobot/> ADD DEGENGPT - TELEGRAM</button> */}
          {/* <button className="btn"><FaDiscord/> ADD DEGENGPT - DISCORD</button> */}
        </div>
      </div>
    </div>
  );
}
