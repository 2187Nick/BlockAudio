import React from "react";
import { Divider, Button } from "antd";
import "antd/dist/antd.css";
import { useVoiceRecorder } from "use-voice-recorder";
import { useState } from "react";


/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({
  tx,
  readContracts,
  writeContracts,
}) {

  const [records, updateRecords] = useState([]);
  //console.log("records: ", records);
  const [message, setMessage] = useState("");
  //console.log("message: ", message);
  const [message1, setMessage1] = useState("");
  //console.log("message1: ", message1);
  const [message2, setMessage2] = useState("");
  const {isRecording, stop, start} = useVoiceRecorder((data)  =>  {
    updateRecords([...records, window.URL.createObjectURL(data)]);
    //console.log("data: ", data);

    var reader = new window.FileReader();
    reader.readAsDataURL(data); 
    reader.onloadend = function() {
      const base64 = reader.result;
      //console.log(base64 );
      const base65 = base64.split(',')[1];
      //console.log(base65 );
      setMessage(base65);
      
    }


  });

  return (
    <div className={'container'}>
      <div className={'hint'}>
      </div>
      <div className={'records'}>
        {records.map((data, idx) => (
          <div key={idx}>
            <audio src={data} controls preload={'metadata'} />
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 820, margin: "auto", marginTop: 40, paddingBottom: 0 }}>
        
        <h1 className={'onair'}>&nbsp;On Air:  {isRecording ? 'Recording' : 'Off'}</h1>
        
      </div>
      <div style={{ maxWidth: 820, margin: "auto", marginTop: 100, paddingBottom: 40 }}>
              <Button type={"primary"} size={"large"} onClick={start}>Start</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type={"primary"} size={"large"} onClick={stop}>Stop</Button>
      </div>
      
      <div style={{ maxWidth: 820, margin: "auto", marginTop: 32, paddingBottom: 20 }}>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setAudioMessage(message))
              }}>Send to Alice</Button>
      </div>
      <div style={{ maxWidth: 820, margin: "auto", marginTop: 4, paddingBottom: 0 }}>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setAudioMessage1(message))
              }}>Send to Bob</Button>
      </div>
      <Divider />
        <h1>Alice's Voicemail Inbox:</h1>
        <Button type={"primary"} onClick={async () => {
                const msg1 = await readContracts.BlockAudio.getAudioMessage();
                setMessage1(msg1);
                //console.log("msg1: ", msg1);
                
              }}>Check</Button>
        <div>
        <audio controls src={message1}></audio>
        </div>
      <Divider />
        <h1>Bob's Voicemail Inbox:</h1>
        <Button type={"primary"} onClick={async () => {
                const msg2 = await readContracts.BlockAudio.getAudioMessage1();
                setMessage2(msg2);
                //console.log("msg1: ", msg1);
                
              }}>Check</Button>
        <div>
        <audio controls src={message2}></audio>
        </div>
    </div>
  )
};

export default Home;
