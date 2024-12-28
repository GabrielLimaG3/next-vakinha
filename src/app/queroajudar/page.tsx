'use client'

import { Button } from "@/components/ui/button";

const PageAjudar = () =>{

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-10">
                <h1>Como Ajudar</h1>
                <h2>Escolha Uma dos Valores Para Doar</h2>
                <div className="border-2 p-[25px]">
                    <div className="h-[300px]">

                    <img className="w-full h-full" src="https://static.vakinha.com.br/static/v4/vaquinha_default.png?ims=700x410" alt="" />
                    </div>
                    <div>
                        <h1>Valor</h1>
                        <h2>R$ 10,00</h2>
                        <Button asChild><a target="_blank" href="https://go.tribopay.com.br/blmiiookm1">Doar</a></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageAjudar;