import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import styles from "./QrCodeScanner.module.scss";

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState<string>("");
  const handlerScan = (result: IDetectedBarcode[]) => {
    console.log(result);
    setScanned(result[0].rawValue);
  };
  const settings = {
    audio: false,
    // finder: false,
  };
  return (
    <div className={styles.container}>
      <Scanner
        allowMultiple
        onScan={handlerScan}
        components={settings}
        styles={{ container: { width: "400px", height: "400px" } }}
      />
      <p className={styles.result}>{scanned}</p>
    </div>
  );
};

export default QrCodeScanner;
