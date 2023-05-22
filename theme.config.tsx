import Image from "next/image";
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    "darkMode": true,
    "primaryHue": 214,
    logo: (
        <>
            <Image src={'/neoXL-solid.svg'} width={30} height={30}
              alt={'neoxl-logo'}/>
        </>
    ),
    footer: {
        text: <span>
            <a href="https://orgbeat.com" target="_blank"></a>
        </span>,
        "component": null
    },
    feedback: {
        "content": null,
    },
    editLink: {
        "text": null
    },
    sidebar:{
        toggleButton: true,
        defaultMenuCollapseLevel: 1
    },
    
}

export default config
