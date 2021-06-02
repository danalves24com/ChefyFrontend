import React from 'react'


class Modal extends React.Component {
	constructor(a) {
		super(a);

	}

	componentDidMount() {

	}

	render() {
		return (
			<>
				<div class="absolute w-screen h-screen bg-gray-100 bg-opacity-40">
					<div class="h-full w-full flex items-center justify-center text-white">
						<div class="fixed p-10 text-center bg-green-700 rounded">
							<center>
								Modal
							</center>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Modal;