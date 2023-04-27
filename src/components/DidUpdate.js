import React from 'react';

class Appjs extends React.Component {

state = {
	company: 'GFG'
};

componentDidMount() {
	
	setTimeout(() => {
	this.setState({ company: 'shivatech' });
	}, 600);
}

componentDidUpdate() {
	document.getElementById('disclaimer').innerHTML =
	'shivatech is also known as ' + this.state.company;
}

render() {
	return (
	<div>
		<h1 style={{
		margin: 'auto',
		width: '50%',
		padding: 20,
		marginTop: '10%',
		border: 'solid 1px black',
		textAlign: 'center',
		fontSize: 18,
		}}>
		this is gratest:
		{this.state.company}
		<div id="disclaimer"></div>
		</h1>
	</div>
	);
}
}

export default Appjs;
