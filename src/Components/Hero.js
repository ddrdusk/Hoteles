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
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>dddd, DD de mmmm de AAAA</strong> hasta el <strong>dddd, DD de mmmm de AAAA</strong>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}
export default Hero;
