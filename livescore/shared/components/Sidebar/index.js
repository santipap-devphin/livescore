import React from 'react';
import PropTypes from 'prop-types';


const Sidebar = ({ children }) => {
  return (
    <>
      {/* <aside className="col">
      <div className="nav flex-column nav-pills">
        <div className="bg-secondary">ลีคยอดฮิต</div>
        <a className="nav-link active" href="#v-pills-home" >Home</a>
        <a className="nav-link" href="#v-pills-profile">Profile</a>
        <a className="nav-link" href="#v-pills-messages">Messages</a>
        <a className="nav-link" href="#v-pills-settings">Settings</a>
      </div>
    </aside> */}
      {children}
    </>
  );
};


Sidebar.propTypes = {

};




export default Sidebar;
