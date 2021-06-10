import React from 'react';
class OptionsFilter extends React.Component
{
  render()
  {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={ {width: '100%'} }>
            <select style={ {width: '100%'} }>
              ...
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas"></i>
          </div>
        </div>
      </div>
    )
  }
}
export default OptionsFilter;
