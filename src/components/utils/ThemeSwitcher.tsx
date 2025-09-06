"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useRef, useState } from 'react'
import { GoGear } from 'react-icons/go';
import { LuSun } from 'react-icons/lu';
import { TbMoonStars } from 'react-icons/tb';

const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeOptions = [
    { id: 'light', label: 'Light', icon: <LuSun /> },
    { id: 'dark', label: 'Dark', icon: <TbMoonStars /> },
    { id: 'system', label: 'System', icon: <GoGear /> }
  ]
  const currentThemeOption = themeOptions.find(option => option.id === theme);

  return (
    <div ref={dropdownRef} className='relative inline-block'>
      <button
        className={`
          flex items-center justify-center w-10 h-10 rounded-2xl text-xl cursor-pointer
          transition-all duration-300
          ${showMenu
            ? // Active (menu open) styles
            "bg-gray-800 dark:text-black dark:bg-gray-200 text-white"
            : // Default (closed)
            "text-black dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black hover:shadow-md"
          }
        `}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {currentTheme === "light" ? (
          <LuSun />
        ) : (
          <TbMoonStars />
        )}
      </button>
      {showMenu && (
        <ul className='absolute top-full mt-2 right-0 p-2 w-44 border-1 border-black dark:border-white rounded-lg bg-white dark:bg-black text-black dark:text-white shadow-lg overflow-hidden z-[10000] flex flex-col justify-center items-stretch pb-2'>
          <li className='px-3 py-1 flex flex-col justify-center items-stretch gap-1 bg-gray-200 dark:bg-gray-800 dark:text-white text-nowrap cursor-pointer rounded-lg text-sm'>
            <div className='text-gray-600 dark:text-gray-400 text-xs'>Current Theme</div>
            <div className='flex justify-start items-center gap-2'>
              <span className='text-lg'>
                {currentTheme === "light" ? (
                  <LuSun />
                ) : (
                  <TbMoonStars />
                )}
              </span>
              <span>
                {currentThemeOption?.label}
              </span>
            </div>
          </li>
          <hr className='my-2' />
          {
            themeOptions.map(option => (
              <li
                key={option.id}
                onClick={() => setTheme(option.id)}
                className={`px-3 h-9 flex justify-start items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white text-nowrap cursor-pointer rounded-lg text-sm`}
              >
                <span className='text-lg'>{option.icon}</span>{option.label}
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default ThemeSwitcher