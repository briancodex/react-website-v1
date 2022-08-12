import React from 'react'
import History from '../History'
import VisMis from '../VisMis'
import Employee from '../Employee'


function Profile() {
  return (
    <>
      <History />
      <VisMis />
      <div className="container">
        <h2>Perangkat Desa</h2>
      </div>
      <div className="container d-flex ">
      <Employee name="budi" title="Boss"/>
      <Employee name="budi" title="Boss"/>
      <Employee name="budi" title="Boss"/>
      </div>
      
    </>
  )
}

export default Profile