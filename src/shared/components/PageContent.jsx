import React from 'react';
import ReactHtmlParser from 'react-html-parser';

/**
 * presentational component for static content on the web pages.
 */
function PageContent({pageTitle, challenge, solution}) {

    return (
        <div className="PageContent">
            <h1>{ pageTitle}</h1>
            <hr />
            <h3>{challenge.title }</h3>
            <p>{ ReactHtmlParser(challenge.content)}</p>
            {challenge.additional_requirements ? (<h4>{challenge.additional_requirements}</h4>) : (<div></div>)}
            <ol>
                {challenge.list.length > 0 && (challenge.list.map((item, index) => {
                    return <li key={index}>{ ReactHtmlParser(item)}</li>
                }))}
            </ol>
            {challenge.additional_content ? (<p>{ ReactHtmlParser(challenge.additional_content) }</p>) : (<div></div>)}
            <h3>{ solution.title}</h3>
            <p>{ReactHtmlParser(solution.content)}</p>
        </div>
    )
}

export default PageContent;