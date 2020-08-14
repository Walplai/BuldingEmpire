import React, { Fragment } from 'react'
import { GoQuote } from "react-icons/go";
import {BlogQuote} from './quote.stc'

const Quote = ({text, author, layout, ...restProps}) => {
    return (
        <BlogQuote layout={layout} {...restProps}>
            <GoQuote className="icon"/>
			{layout !== 3 && (
				<Fragment>
					{text && <h3>{text}</h3>}
					{author && <footer>-{author}</footer>}
				</Fragment>
			)}
        </BlogQuote>
    )
}

export default Quote
