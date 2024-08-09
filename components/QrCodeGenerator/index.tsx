import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import styles from "./QrCodeGenerator.module.scss";
const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Введите текст..."
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setResult("");
        }}
      />
      <button
        className={styles.button}
        onClick={() => {
          setResult(value);
          setValue("");
        }}
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
