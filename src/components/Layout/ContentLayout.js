import React from 'react';

const ContentLayout = ({ children }) => {
	return (
		<div className="flex justify-center lg:p-10 p-3 ">
			<div className=" bg-slate-300 rounded-3xl lg:w-9/12 text-black border-4 border-black lg:p-10 ">{children}</div>
		</div>
	);
};

const Header = ({ children }) => {
	return <div className="text-center text-5xl font-bold pb-10 pt-5">{children}</div>;
};

const Body = ({ children, gap }) => <div className={`flex flex-wrap ${gap}`}> {children}</div>;

ContentLayout.Header = Header;
ContentLayout.Body = Body;

export default ContentLayout;
