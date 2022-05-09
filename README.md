# 🏗 scaffold-eth - Audio over Blockchain

> Demonstration showing how audio can be sent over the blockchain.

Play with the [live app](https://block-audio.surge.sh/) deployed on kovan network.

## How to:
Connect to Kovan test network.

Press the Start button and speak. Currently it can only handle messages less than 3 seconds.
  
Press the Stop button. Listen to your message.

Click "Send to Alice" or "Send to Bob".  Approve the transaction.

Wait for the transaction to process.

Click "Check" and the audio should load.

Press the play button to listen to the message.

![blockaudio1](https://user-images.githubusercontent.com/75052782/167464066-901bcce8-652f-4acc-8b26-646ba4f1bc2a.png)


### Installation

Clone the repo:
```
git clone  https://github.com/chrontast/BlockAudio.git
cd BlockAudio
```

Install dependencies:
```
yarn install
```

Start frontend
```
cd BlockAudio
yarn start
```

In a second terminal window, start a local blockchain
```
yarn chain
```

In a third terminal window, deploy contracts:
```
yarn deploy
```

🌍 You need an RPC key for production deployments/Apps, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js`

🔏 Edit your smart contract `BlockAudio.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app



## Contact

Join the telegram [support chat 💬](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with 🏗 scaffold-eth!
