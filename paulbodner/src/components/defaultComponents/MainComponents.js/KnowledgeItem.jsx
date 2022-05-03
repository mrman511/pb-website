import React from "react";

export default function KnowledgeItem({ id, name, url, frameworks }) {
  const parsedFrameworks = []; 

  frameworks.forEach((framework) => {
    if (framework === frameworks[0]) {
      parsedFrameworks.push(<tr className="data-top" >
        <td className="left" ><img src={ framework.icon_url } alt={ framework.name } /></td>
        <td className="right" ><h4>{ framework.name }</h4></td>
      </tr>)
    } else if (framework === frameworks[frameworks.length - 1]) {
      parsedFrameworks.push(<tr className="knowledge-data data-bottom">
        <td className="left" ><img src={ framework.icon_url } alt={ framework.name } /></td>
        <td className="right" ><h4>{ framework.name }</h4></td>
      </tr>)
    } else {
      parsedFrameworks.push(<tr className="knowledge-data">
        <td className="left" ><img src={ framework.icon_url } alt={ framework.name } /></td>
        <td className="right" ><h4>{ framework.name }</h4></td>
      </tr>)
    }
  })

  return (
    <div className="knowledge-item" key={ id } >
      <table>
        <thead>
          <tr>
            <th>
              <img src={ url } />
              <h3>{ name }</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          { parsedFrameworks }
        </tbody>
      </table>
    </div>
  );
}