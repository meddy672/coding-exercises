import React from 'react';

function PageHeader({ title, className }) {
    return (
        <>
            <h1 className={className}>{ title}</h1>
            <hr />
        </>
    )
}
export default PageHeader;