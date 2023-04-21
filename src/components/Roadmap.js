import './Roadmap.css';
import React, { useRef, useEffect, useState } from 'react';
import FootstepsAnimation from './Footsteps';
import Scroller from './Scroller';


export default function Roadmap() {
  const canvasRef = useRef(null);
  const [showScroller, setShowScroller] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setShowScroller(true);
      } else {
        setShowScroller(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions and clear previous drawings
    canvas.width = window.innerWidth - 250;
    canvas.height = 300;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizontal line
    ctx.beginPath();
    ctx.moveTo(0, 50); // Center line vertically on canvas
    ctx.lineTo(canvas.width, 50);
    ctx.strokeStyle = 'white';
    ctx.stroke();

    // Draw four columns attached to the line
    const columnWidth = canvas.width / 4;
    const columnLabels = ['Phase 0', 'Phase 1', 'Phase 2', 'Phase 3'];
    const columnText = [`  - Initial MVPs\n  - Website + socials\n  - Token Stealth launch\n`, '  - New Token finder powered by AI \n  - Community activations \n  - Partnerships with existing crypto\n    communities\n  - Utility token integration ', ' - Major brand partnerships\n - AI powered NFT bot\n - Full scale degen web application \n - Expand revenue model', ' - Increase business revenue\n - More major partnerships '];

    for (let i = 0; i < 4; i++) {
      // Calculate text height and set column height
      const lineHeight = 20;

      // Draw column
      const x = i * columnWidth + columnWidth / 2;
      const y = 60;
      const radius = 10;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "transparent"
      ctx.fill();

      // Draw column dot
      ctx.beginPath();
      ctx.arc(x + 10, y - 10, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "white"
      ctx.fill();


      // Draw column label
      ctx.font = '16px Noto Sans JP';
      ctx.fillStyle = 'white';
      ctx.fillText(columnLabels[i], x - 15, y + 25);

      // Draw column text aligned left
      ctx.font = '14px Noto Sans JP';
      ctx.textAlign = 'left';
      ctx.fillStyle = 'white';
      const lines = columnText[i].split('\n');
      for (let j = 0; j < lines.length; j++) {
        ctx.fillText(lines[j], x - 95, y + 55 + lineHeight * j);
      }
    }
  };

  const handleMouseMove = (event) => {
    draw();
  };

  useEffect(() => {
    draw();
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div className='roadmap-container'>

      <div className="roadmap-title">
        <div class="divider">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="rectangle"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <p>ROADMAP</p>
      </div>

      <div className='dotted-border'>
        <div className='footsteps'>
          {window.innerWidth < 767 ? (
            <FootstepsAnimation numFootsteps={3} />
          ) : (
            <FootstepsAnimation numFootsteps={8} />
          )}
        </div>
      </div>

      {showScroller ? (
        <Scroller />
      ) : (
        <div className='line-with-columns'>
          <canvas ref={canvasRef} />
        </div>

      )}
    </div>
  )
}
