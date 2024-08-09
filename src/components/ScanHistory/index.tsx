import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../../../constants";

const ScanHistory = () => {
	const data=JSON.parse(localStorage.getItem(SCAN_DATA)||'[]');
  return (
	 <div>
		{data.map((data:string)=><p key={data}>{data}<QRCodeSVG
			size={100}
			value={data}
			bgColor="#fff"
			fgColor="#000"
			level="L"
		 /></p>)}
	 </div>
  )
}

export default ScanHistory
