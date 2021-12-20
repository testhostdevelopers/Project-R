import React, {useState} from "react";
import './style.scss';

export default function ConnectWallet () {
  const [ConnectWallet, setConnectWallet] = React.useState(0);
  // change useStare to 0 and 1
  // wallet connect = 1
  // wallet not connect = 0
  let CWName = '';
  if( ConnectWallet === 1 ){
    CWName = "CWNameTrue";
  }else{
    CWName = "CWNameFalse";
  }
  return (
    
    <div className={`wallet_connected ${CWName}`}>
        <div className="Wallet-Connect">
          <p>0xbAu7...f08a</p>
        </div>
        <div className="Wallet-NotConnect">
          <p>Connect Wallet</p>
        </div>
    </div>

  );
}

