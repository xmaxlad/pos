'use client'

import {Button} from '@/components/ui/button'
import Receipt from '@/components/Receipt' 
import {useRef} from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function Page(){
    const screenRef = useRef<HTMLDivElement>(null);

  const downloadReceipt = async () => {
    if (!screenRef.current) return;

    const canvas = await html2canvas(screenRef.current, { scale: 1 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("receipt.pdf");
  };
    return(
        <div className='max-w-xl mx-auto my-8'>
            <div ref={screenRef}>
                <Receipt/>
            </div>
            <Button className='my-4' onClick={downloadReceipt}>Download Receipt</Button>
        </div>
    )
}