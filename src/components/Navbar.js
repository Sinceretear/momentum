import React from 'react';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../images/logo1.png';
import Clock from 'react-live-clock';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Projects', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Navbar() {

  return (
    <Disclosure as="nav" className="blur">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                  <img
                    //className="hidden lg:block h-8 w-auto"
                    className="img-responsive"
                    src={logo}
                    height={50}
                    width={150}
                    alt="logo"
                  />
                </div>
              {/* <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white' : 'text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div> */}
              <div className="flex justify-right text-white">
                <Clock format={'h:mm A'} ticking={true} timezone={'US/Pacific'} />
              </div>
            </div>
          </div>

          

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300',
                    'block px-4 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;