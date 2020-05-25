import React from 'react';
require('./modelbox.scss');

const Modal = (props) => {
	const { closeModal } = props;
	const closeicon = () => (
		<div
			name="times"
			onClick={closeModal}
			className="close"

		/>
	);

	return (
		<div className="overlay">
			<div className="content">
				{closeicon()}
				{props.children}
			</div>
		</div>
	);
};


export default Modal;