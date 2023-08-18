import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="w-full bg-black block">
			<div className="text-center">
				<div className="py-5">
					<h3>Ikuti Untuk Lebih Lanjut.</h3>
				</div>
				<div className="flex justify-center gap-16 py-5">
					<div>
						<a
							href="https://www.instagram.com/mapala.teknisi/"
							className="flex justify-center pb-2">
							<FaInstagram className="w-[36px] h-[36px] hover:bg-white hover:rounded hover:text-black" />
						</a>
						<p>Instagram</p>
					</div>
					<div>
						<a
							href="https://www.tiktok.com/@mapalateknisi"
							className="flex justify-center pb-2">
							<FaTiktok className="w-[36px] h-[36px] hover:bg-white hover:rounded-full hover:text-black" />
						</a>
						<p>Tiktok</p>
					</div>
					<div>
						<a
							href="https://www.facebook.com/profile.php?id=100075251397476&mibextid=D4KYlr"
							className="flex justify-center pb-2">
							<FaFacebook className="w-[36px] h-[36px] hover:bg-white hover:rounded-full hover:text-black" />
						</a>
						<p>Facebook</p>
					</div>
				</div>
				<div className="lg:flex block  lg:justify-between p-5">
					<span>
						<p className="flex justify-center lg:py-[0px] py-5">
							Created by
							<a
								href="https://andifauzi07.github.io/"
								className="pt-[2px] px-2">
								<FaGithub className="w-[24px] h-[24px] hover:bg-white hover:rounded-full hover:text-black" />
							</a>
						</p>
					</span>
					<span>All right reserved. &copy; Mapala Teknisi 2023</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
