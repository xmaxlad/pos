'use client'

import {Button} from '@/components/ui/button'
import {useStore} from '@/store/useStore'
import Receipt from '@/components/Receipt' 
import {useRef} from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function Page(){
    //refactor this to react-pdf
    const {cartItems,user} = useStore()
    const screenRef = useRef<HTMLDivElement>(null);

  const downloadReceipt = async () => {
    if (!screenRef.current) return;

    const canvas = await html2canvas(screenRef.current, { scale: 1 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 30, 30, imgWidth, imgHeight);
    pdf.save("receipt.pdf");
  };
    return(
        <div className='max-w-xl mx-auto'>
            <div ref={screenRef}>
                <h2>Receipt</h2>
                <Receipt services={cartItems} user={user === null ? {} : user}></Receipt> 
            </div>
            <Button onClick={downloadReceipt}>Download Receipt</Button>
        </div>
    )
}