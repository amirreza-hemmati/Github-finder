import React from "react";
import Icon from 'react-eva-icons';

const IconGithub = () => {

	return <Icon
		name="github"
		size="xlarge"
		animation={{
			type: "flip",
			hover: true,
			infinite: false
		}}
	/>
};

export default IconGithub;