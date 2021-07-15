import React from 'react';

export default function Loader({ isSubmitted, jobData }) {
	return (
		<div
			className={`loading ${isSubmitted && jobData === false ? '' : 'hidden'}`}
		>
			<div className="ball first"></div>
			<div className="ball second"></div>
			<div className="ball third"></div>
		</div>
	);
}
