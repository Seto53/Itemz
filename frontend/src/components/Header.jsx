import React, {Fragment, useState} from "react";
import '../docs/styles/header.css';
import '../docs/styles/root.css';
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header({element, navigation}) {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        console.log("clicked")
        setIsOpen(true)
    }

    return (
        <div>
            <header className="App-header">
                <div className="header-class">

                    <Disclosure as="nav" className="bg-gray-800">
                        {({open}) => (
                            <>
                                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                                    <div className="relative flex items-center justify-between h-16">
                                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                            {/* Mobile menu button*/}
                                            <Disclosure.Button
                                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                                ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                        <div
                                            className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                            <a href={'/'}>
                                                <div className="flex-shrink-0 flex items-center">
                                                    <img
                                                        className="block lg:hidden h-10 w-auto"
                                                        src={require('../docs/assets/logo.png')}
                                                        alt="ItemZ"
                                                    />
                                                    <img
                                                        className="hidden lg:block h-10 w-auto"
                                                        src={require('../docs/assets/logo_with_name.png')}
                                                        alt="ItemZ"
                                                    />
                                                </div>
                                            </a>
                                            <div className="hidden sm:block sm:ml-6">
                                                <div className="flex space-x-4">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                'px-3 py-2 rounded-md text-sm font-medium'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="navigation-container hidden md:block w-container">
                                                <form action="" className="search-3">
                                                    <label htmlFor="search"/>
                                                    <input className="search-input-2 w-input" id="search"
                                                           maxLength="250" name="query"
                                                           placeholder="Search items and drops"
                                                           required=""
                                                           type="search"/>
                                                    <input className="search-button-2 w-button" type="submit"
                                                           value="Search"/></form>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                            <button><img alt="gold" className="tiny-profile-p"
                                                         src={require('../docs/assets/gold.png')} onClick={openModal}/></button>


                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button
                                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src={require('../docs/assets/profile_picture.png')}
                                                            alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    {/*if logged in*/}
                                                    <Menu.Items
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({active}) => (
                                                                <a
                                                                    href="/Profile"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Your Profile
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({active}) => (
                                                                <a
                                                                    href="/Settings"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Settings
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({active}) => (
                                                                <a
                                                                    href="/"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Sign out
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>

                                                    {/*if not logged in*/}
                                                    {/*<Menu.Items*/}
                                                    {/*    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                                                    {/*    <Menu.Item>*/}
                                                    {/*        {({active}) => (*/}
                                                    {/*            <a*/}
                                                    {/*                href="/Login"*/}
                                                    {/*                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                                                    {/*            >*/}
                                                    {/*                Login*/}
                                                    {/*            </a>*/}
                                                    {/*        )}*/}
                                                    {/*    </Menu.Item>*/}
                                                    {/*    <Menu.Item>*/}
                                                    {/*        {({active}) => (*/}
                                                    {/*            <a*/}
                                                    {/*                href="/Register"*/}
                                                    {/*                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                                                    {/*            >*/}
                                                    {/*                Register*/}
                                                    {/*            </a>*/}
                                                    {/*        )}*/}
                                                    {/*    </Menu.Item>*/}
                                                    {/*</Menu.Items>*/}


                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="sm:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block px-3 py-2 rounded-md text-base font-medium'
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

                </div>
            </header>
            {element}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Buy Gold
                                </Dialog.Title>
                                <div className="mt-2">
                                    <label htmlFor="goldBuyCount" className="text-sm text-gray-500">
                                        Please enter the amount to purchase:
                                    </label>&nbsp;
                                    <input type="number" id="goldBuyCount" name="goldBuyCount" min="5" max="100000"
                                           style={{height: "30px", width: "90px", borderRadius: "10px"}}/>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-400 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Buy
                                    </button>
                                    &nbsp;
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>

    );
}