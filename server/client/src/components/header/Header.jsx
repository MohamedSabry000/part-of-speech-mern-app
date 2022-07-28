import React from 'react';
import './header.css'

export default function Header() {
  return (
    <section id="main-header" style={{backgroundImage: `url('/assets/background.jpeg')`}}>
      <div className="header-wrapper">
        <div className="container-default header-container">
          <div className="heading">
            <h3 className="title">Part of Speech</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
