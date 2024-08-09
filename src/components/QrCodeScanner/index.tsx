import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import styles from "./QrCodeScanner.module.scss";
import {SCAN_DATA} from "../../../constants.ts"

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState<string>("");
  
  const handlerScan = (result: IDetectedBarcode[]) => {
    setScanned(result[0].rawValue);
	 const prevData=JSON.parse(localStorage.getItem(SCAN_DATA)||"[]");
	 localStorage.setItem(SCAN_DATA,JSON.stringify([...prevData,result[0].rawValue]));
  };
  const settings = {
    audio: false,
    finder: false,	
  };
  return (
    <div className={styles.container}>
      <Scanner
      //   allowMultiple
        onScan={handlerScan}
        components={settings}
        styles={{ container: { width: "400px", height: "400px" } }}
      />
      <p className={styles.result}>{scanned}</p>
    </div>
  );
};

export default QrCodeScanner;
