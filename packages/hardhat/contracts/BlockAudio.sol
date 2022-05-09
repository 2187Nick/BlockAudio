//SPDX-License-Identifier: MIT
pragma solidity <0.9.13;


contract BlockAudio {
  string voicemail;
  string voicemail1;
   
  // function setAudioMessage(string memory _voicemail) public view returns (string memory) {
  function setAudioMessage(string memory _voicemail) public {
    voicemail = string(abi.encodePacked('data:audio/webm;codecs=opus;base64,',_voicemail));
  } 

  function getAudioMessage() public view returns (string memory) {
        return voicemail;
  }

  function setAudioMessage1(string memory _voicemail) public {
    voicemail1 = string(abi.encodePacked('data:audio/webm;codecs=opus;base64,',_voicemail));
  } 

  function getAudioMessage1() public view returns (string memory) {
        return voicemail1;
  }

}

