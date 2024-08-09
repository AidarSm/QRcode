import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../../constants'

const GenerateHistory = () => {
	const generateData= JSON.parse( localStorage.getItem(GENERATE_DATA)||'[]');
  return (
	 <div>
		{generateData.map((data:string)=>{
		return(
		<>
		<p key={data}>{data}<QRCodeSVG
			size={100}
			value={data}
			bgColor="#fff"
			fgColor="#000"
			level="L"
		 /></p>
		
		 </>)	
			})}
		
	 </div>
  )
}

export default GenerateHistory
