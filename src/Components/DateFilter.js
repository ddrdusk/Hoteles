/*
  {
    dateFrom: new Date(),
    dateTo: new Date(),
    country: undefined,
    price: undefined,
    rooms: undefined
  }
*/
import React from 'react';
class Hero extends React.Component
{
  render()
  {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input className="input" type="date" />
          <span className="icon is-small is-left">
            <i className="fas"></i>
          </span>
        </div>
      </div>
    )
  }
}
export default Hero;
