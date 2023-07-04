import React from 'react';
import './index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const burger = toggle ? 'hamburger-active' : '';
	const navMenu = toggle ? '' : 'hidden';
	function Handleclick() {
		setToggle(!toggle);
	}
	return (
		<>
			<header className="absolute top-0 left-0 z-10 flex w-full navbar-fixed items-center bg-transparent">
				<div className="container ">
					<div className="relative flex items-center justify-between">
						<div className="px-4 lg:w-full lg:px-8 lg:mx-auto">
							<Link
								to="/"
								className="lg:ml-8 block py-6 text-lg font-bold text-white hover:text-slate-400">
								<img
									src={logo}
									alt=""
									className="w-[32px]"
								/>

								<span>Mapala Teknisi</span>
							</Link>
						</div>
						<div className="flex items-center px-4">
							<button
								id="hamburger"
								name="hamburger"
								type="button"
								onClick={Handleclick}
								className={`absolute right-4 block ${burger} lg:hidden`}>
								<span className={`hamburger-line origin-top-left transition duration-300 ease-in-out`}></span>
								<span className={`hamburger-line transition duration-300 ease-in-out`}></span>
								<span className={`hamburger-line origin-bottom-left transition duration-300 ease-in-out`}></span>
							</button>
						</div>
						<nav
							id="nav-menu"
							className={` ${navMenu} absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-black py-5 shadow-lg dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}>
							<ul className="block lg:flex justify-end lg:pr-10">
								<li className="group">
									<Link
										to="/"
										className="mx-5 flex py-2 text-base text-dark lg:hover:text-slate-400 ">
										Home
									</Link>
								</li>
								<li className="group">
									<Link
										to="/about"
										className="mx-5 flex py-2 text-base text-dark lg:hover:text-slate-400 ">
										Tentang Kami
									</Link>
								</li>
								<li className="group">
									<Link
										to="/divisi"
										className="mx-5 flex py-2 text-base text-dark lg:hover:text-slate-400 ">
										Divisi
									</Link>
								</li>
								<li className="group">
									<Link
										to="/kontak"
										className="mx-5 flex py-2 text-base text-dark lg:hover:text-slate-400 ">
										Alamat
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
