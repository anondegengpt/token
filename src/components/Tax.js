import "./Tax.css";

export default function Tax() {
  return (
    <div className="percent-container">
      <div className="percent-top">
        <div className="percent-txt">
          <h1>5%</h1>
          <h3>Team Vesting</h3>
        </div>
        <div className="percent-txt">
          <h1>3%</h1>
          <h3>Buy Tax</h3>
        </div>
        <div className="percent-txt">
          <h1>3%</h1>
          <h3>Sell Tax</h3>
        </div>
      </div>
      <div className="percent-txt-1-1">
        <h2>1% of buy tax & 1% of sell tax are auto-added to LP</h2>
      </div>
      <div class="divider">
        <div class="line"></div>
        <div class="circle"></div>
        <div class="rectangle"></div>
        <div class="circle"></div>
        <div class="line"></div>
      </div>
    </div>
  );
}
