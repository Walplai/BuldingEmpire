import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import { LinkedWrap } from './linked.stc'

const Linked = ({ link, layout, ...restProps }) => {
	return (
		<LinkedWrap layout={layout} {...restProps}>
			<FiExternalLink className="icon" />
			{layout !== 3 && <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>}
		</LinkedWrap>
	)
}

export default Linked
