import React from 'react';

export default function Distance() {
	return (
		<div className="form-group" id="sel1">
			<label htmlFor="sel1"></label>
			<select
				className="form-control input-lg miles"
				id="sel1"
				name="sellist1"
				defaultValue="40"
			>
				{/* <!-- value is set in km --> */}
				<option value="1">Only in</option>
				<option value="8">5 mi.</option>
				<option value="16">10 mi.</option>
				<option value="24">15 mi.</option>
				<option value="40">25 mi.</option>
				<option value="80">50 mi.</option>
				<option value="161">100 mi.</option>
				<option value="322">200 mi.</option>
				<option value="5000">CONUS</option>
			</select>
		</div>
	);
}
