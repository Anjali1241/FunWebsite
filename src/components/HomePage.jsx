import { useState } from "react";

function HomePage() {
  const [showRibbons, setShowRibbons] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);

  const handleYesClick = () => {
    setShowRibbons(true);
    setShowNoMessage(false);
  };

  const handleNoResponse = () => {
    setShowNoMessage(true);
    setShowRibbons(false); 
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500 overflow-hidden">
      {/* Raining Ribbon Effect */}
      {showRibbons && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={`ribbon ribbon-${index}`}></div>
          ))}
        </div>
      )}

      <div className="text-5xl italic font-extrabold text-white z-10">
        {showNoMessage
          ? "You don't have any options"
          : showRibbons
          ? "Can't wait to see you!!!"
          : "Wanna go out with me?"}
      </div>
      <img
        src={showNoMessage ? "src/assets/noOption.gif" : showRibbons ? "src/assets/hug.gif" : "src/assets/excited.gif"}
        className="m-5"
        alt={showNoMessage ? "Sad" : showRibbons ? "Hug" : "Excited"}
      />
      <div className="flex font-bold z-10">
        <button
          className="m-4 bg-green-300 px-5 py-2 rounded-md hover:bg-green-400"
          onClick={handleYesClick}
        >
          YES
        </button>
        <button
          className="m-4 bg-red-600 px-5 py-2 rounded-md cursor-help "
          onClick={handleNoResponse}
          disabled={showRibbons} // Disable NO button if ribbons are shown
        >
          NO
        </button>
      </div>
    </div>
  );
}

export default HomePage;
