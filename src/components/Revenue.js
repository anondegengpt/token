import "./How.css";
import {FaRobot,FaDiscord} from 'react-icons/fa'


export default function Revenue() {
  return (
    <div className="how-container">
      <div className="how-txt">
        <h1> Revenue Model</h1>
        <p>
        <span className="bold"> $DegenGPT </span> will soon release its first product, CHAD, a AI powered
          trading assistant, which will allow users to access a range of
          token-gated features by spending (and burning) <span className="bold"> $DegenGPT </span> tokens. 
          <br/>
          <br/>
          As we continue to build out our ecosystem and onboard both web2 and
          crypto-native users, we will maintain a variety of revenue streams
          including:
          <br/>
          <br/>
           - custom tooling for B2B partners
          <br/>
          <br/>
          - paid advertising slots on
          our AI-powered products and bots
          <br/>
          <br/>
          - exclusive NFT tools
          <br/>
          <br/>
          To maintain
          the integrity of our community, <span className="bold"> $DegenGPT </span> will be selective about the
          projects we work with, ensuring that when we do, they are highly
          reputable and offer something interesting, fun, or unique to our
          audience. We believe that this approach will help to foster a strong
          and vibrant community of users who are passionate about the potential
          of AI and blockchain technology. We are excited to roll out these
          revenue streams and to see how they will contribute to the growth and
          success of <span className="bold"> $DegenGPT </span>. 
          <br/>
          <br/>
          With our powerful AI capabilities and innovative
          approach to community building, we believe that <span className="bold"> $DegenGPT </span> has the
          potential to become a leading token in the world of crypto trading and
          beyond.
        </p>
        <br />
        <div className="how-left-btn">
          <button className="btn"><FaRobot/> ADD TELEGRAM</button>
          <button className="btn"><FaDiscord/> ADD DISCORD</button>
        </div>
      </div>

      <div className="how-btn-container">
        <div className="btn-outline" style={{ marginBottom: "3em", marginLeft:'10em', marginTop
      :'5em' }}>
          <div className="how-btn">
            <h1>01</h1>
            <p>CUSTOM PRODUCTS FOR COMMUNITIES</p>
          </div>
        </div>
        <div className="btn-outline" style={{ marginBottom: "3em", marginLeft:'10em' }}>
          <div className="how-btn">
            <h1>02</h1>
            <p>PAID ADVERTISING IN OUR PRODUCTS</p>
          </div>
        </div>
        <div className="btn-outline" style={{ marginBottom: "3em", marginLeft:'10em' }}>
          <div className="how-btn">
            <h1>03</h1>
            <p>EXCLUSIVE AI POWERED TOOLS</p>
          </div>
        </div>
        <div className="btn-outline" style={{ marginLeft:'10em' }}>
          <div className="how-btn">
            <h1>04</h1>
            <p>BRAND PARTNERSHIP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
