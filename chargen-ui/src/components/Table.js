import React from 'react';

function Table(props) {
    return (
        <div>
            <h5>{props.name}</h5>
            <table className="table table-bordered table-sm">
                <thead>
                <tr>
                {props.headers.map((header)=>{
                    return <th className key={header}>{header}</th>;
                    })}
                </tr>
                {props.items.map((row)=>{
                    return <tr key={row}>
                        {row.map((field)=>{
                            return <td key={field}>{field}</td>
                        })} 
                     </tr>;
                })}
                </thead>
            </table>
        </div>
    )
}

export default Table;