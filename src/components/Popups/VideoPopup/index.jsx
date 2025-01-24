import React from 'react';
import Modal from 'react-modal';

import iconClose from "../../../images/svg/closeWhite.svg"

const VideoPopup = ({ modalIsOpen, setModalIsOpen, selectedVideo }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black background with opacity
          height: '100vh',
          width: '100vw'
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black', // Black modal background
          border: 'none', // Remove border if needed
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%', // Adjust the width as needed
          height: '80%', // Adjust the height as needed
          zIndex: 9999, // Adjust the z-index if needed
        },
      }}
      contentLabel="Example Modal"
    >
      <button
        onClick={() => setModalIsOpen(false)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        <img
          src={iconClose}
          alt="Close"
          width="50"
          height="50"
        />
      </button>

      {modalIsOpen && (
        <video
          autoPlay
          controls
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        >
          <source src={selectedVideo?.src} type="video/mp4" />
          {/* Add other video source types if needed */}
        </video>
      )}
    </Modal>
  );
};

export default VideoPopup;
