import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import styles from "./QrCodeGenerator.module.scss";
import {GENERATE_DATA} from "../../../constants.ts"
const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handlerChangeValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
	setValue(e.target.value);
	setResult("");
  }

  const handlerClickButton=()=>{
	setResult(value);
	setValue("");
	const prevData=JSON.parse(localStorage.getItem(GENERATE_DATA)||"[]");
	localStorage.setItem(GENERATE_DATA,JSON.stringify([...prevData,value]));
  }

  
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Введите текст..."
        type="text"
        value={value}
        onChange={handlerChangeValue}
      />
      <button
        className={styles.button}
        onClick={handlerClickButton}
      >
        Сгенерировать QR
      </button>
      {result && (
        <QRCodeSVG
          size={256}
          value={result}
          bgColor="#fff"
          fgColor="#000"
          level="L"
        />
      )}
    </div>
  );
};

export default QrCodeGenerator;
