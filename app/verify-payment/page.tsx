"use client"

import {useState} from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [value, setValue] = useState("")
  const router = useRouter()

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-xl mx-auto space-y-2">
        <div className='flex justify-center mx-auto'>Enter the OTP</div>
        <div className='flex justify-center mx-auto text-xs'>(Enter 000000 as dummy OTP)</div>
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button className='w-full flex justify-center mx-auto' onClick={()=>{router.push('/receipt')}}>Submit OTP</Button>
      </div>
    </div>
  )
}
