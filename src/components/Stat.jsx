import React from 'react'
import './Stat.css'
import { FaUser, FaUsers, FaMap, FaMapMarkerAlt } from "react-icons/fa";

function Stat() {
  return (
    <div className="stat">
        <div className="stat-container container-fluid">
            <div className="row text-center">
                <div className="data-columns col-3">
                    <FaUsers /><br/>
                    99999<br/>
                    Penduduk
                </div>
                <div className="data-columns col-3">
                    <FaUser /><br/>
                    99999<br/>
                    Kepala Keluarga
                </div>
                <div className="data-columns col-3">
                    <FaMap /><br/>
                    99999<br/>
                    Luas Daerah
                </div>
                <div className="data-columns col-3">
                    <FaMapMarkerAlt /><br/>
                    99999<br/>
                    Destinasi Wisata
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stat