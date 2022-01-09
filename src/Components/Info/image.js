import axios from 'axios';

import React,{Component} from 'react';

class Image extends Component {

	state = {

	 //Initially, no file selected
	selectedFile: null
	};
	
	// On file select
	onFileChange = event => {

	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload
	onFileUpload = () => {
	
	const formData = new FormData();
	
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	console.log(this.state.selectedFile);
	
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>Press "upload" to upload picture</h2>
		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose a picture before pressing "Upload"</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			Picture
			</h1>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default Image;


