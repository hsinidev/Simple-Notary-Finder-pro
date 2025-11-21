import React from 'react';

const GalaxyBackground: React.FC = () => {
  return (
    <>
      <style>{`
        .galaxy-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -10;
          background: #000000;
          overflow: hidden;
        }

        .star-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: stars-move 100s linear infinite;
          opacity: 0.5;
        }

        .nebula-layer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150vmax;
          height: 150vmax;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          animation: nebula-pulse 20s ease-in-out infinite alternate;
        }

        .nebula-1 {
          background: radial-gradient(circle at center, rgba(76, 29, 149, 0.4), transparent 60%);
          animation-delay: 0s;
          top: 30%;
          left: 40%;
        }
        
        .nebula-2 {
          background: radial-gradient(circle at center, rgba(236, 72, 153, 0.3), transparent 60%);
          animation-delay: -5s;
          top: 70%;
          left: 60%;
        }
        
        .nebula-3 {
          background: radial-gradient(circle at center, rgba(56, 189, 248, 0.3), transparent 60%);
          animation-delay: -10s;
          top: 40%;
          left: 70%;
        }

        .smokey-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(30, 27, 75, 0.4), transparent 50%),
                radial-gradient(circle at 80% 30%, rgba(49, 46, 129, 0.4), transparent 50%);
            mix-blend-mode: overlay;
        }

        @keyframes stars-move {
          from { transform: translateY(0); }
          to { transform: translateY(-200px); }
        }

        @keyframes nebula-pulse {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.2) rotate(10deg); opacity: 0.7; }
        }
      `}</style>
      <div className="galaxy-container">
        <div className="star-field"></div>
        <div className="nebula-layer nebula-1"></div>
        <div className="nebula-layer nebula-2"></div>
        <div className="nebula-layer nebula-3"></div>
        <div className="smokey-overlay"></div>
      </div>
    </>
  );
};

export default GalaxyBackground;