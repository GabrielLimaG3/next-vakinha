'use client'
import { Card } from "@mui/material";
import RippleButton from "../ui/ripple-button";
import LinearProgress from '@mui/material/LinearProgress';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export const CardComponent = () => {
  const router = useRouter();
  const [process,setProcess] = useState(0)
  useEffect(()=>{
    if(process === 100){
      setProcess(0)
    }else{
    setTimeout(()=>{
      setProcess(process + 10)
    },1000)
  }
  },[process])

  return (
    <>
    <div className="flex">
   <div className={ "flex flex-col gap-4 w-[300px] lg:h-[450px] lg:flex-row"}>
    <Card className="max-w-sm w-[340px] p-[20px] border-2 justify-center">
    <LinearProgress color="secondary" variant="determinate" value={process} />
     <div>
     <h1>Arrecadado</h1>
      <h2>R$ 100,00</h2>
     </div>
     
     <div>
      <h1>Meta</h1>
      <h2>R$ 1500,00</h2>
     </div>
     <div>
      <h1>Apoiadores</h1>
      <h2>35</h2>
     </div>
     <RippleButton rippleColor="#ADD8E6" onClick={()=>router.push("/queroajudar")}>Quero Ajudar</RippleButton>
     <div>

     </div>
    </Card>
      </div>
    </div>
    </>
  );
};
