import { Dropdown, Menu, Modal, message } from 'antd'
import React, { useEffect } from 'react'

console.log('process', process)

export const Footer: React.FC = () => {
  return (
    <footer className="flex">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="">
          Created by{` `}
          <a
            className="font-bold no-underline"
            href="https://bryant.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Taylor Bryant
          </a>
        </p>

        <p>
          <a
            className="font-bold no-underline"
            href="https://github.com/taylorbryant/gatsby-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  )
}
