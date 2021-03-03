import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../../components/Sidebar"
// import Link from 'next/link'
import Link from "../../commons/Link"
import { useRouter } from 'next/router'
import { ClubNavStyle } from "./style"
import Avatar from "../../commons/Avatar"
import ClubStatus from "../../components/ClubStatus"

const ClubNav = ({ children, title, logo, flag, nation }) => {
    const router = useRouter()
    //const { id } = router.query
    let path = router.asPath
    const host = path.split("/");
    let nav = host.slice(1, host.length - 1);
    let lastItem = host[host.length - 1]
    let newsitem = host[4]
    // let pageTitle = host.pop()
    let league = router.query && router.query.league
    let teamName = router.query && router.query.name
    let idd = router.query && router.query.id
    let navi = [
        "Overviews",
        "Squad",
        "Champions"
    ]
    return (
        <ClubNavStyle>
            <div className="jumbotron-fluid" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="container-fluid container-xl">
                    <div className="breadcrumb-nav pt-4 pb-1">
                        <ol className="breadcrumb">
                            {
                                nav.map((navitem, index) => (
                                    <li className="breadcrumb-item text-secondary text-capitalize" key={index.toString()}>
                                        {
                                            index === nav.length - 1
                                            ? navitem
                                            : <a className="text-secondary text-decoration-none" href="/">
                                                {navitem.replace(/-/g, " ")}
                                            </a>
                                        }
                                    </li>
                                ))
                            }
                            {/* <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">English Premier League</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Liverpool
                            </li> */}
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-xl-9">
                            <div className="media align-items-center">
                                <img 
                                    width={100} 
                                    height={100} 
                                    src={logo} 
                                    alt='logo' 
                                    className="img-thumbnail h-100px rounded-0 bg-transparent border-0" 
                                />
                                <div className="media-body">
                                    <h2 className='h4 text-title'>{title}</h2>
                                    <img width={25} height={25} src={flag} alt='logo' className="border rounded-circle" />
                                    <small className="ml-3">{nation}</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <Sidebar>
                                <ClubStatus
                                    className="mt-3 mt-md-0"
                                    title="20-21 PREM STATS"
                                    squad="41"
                                    players="24"
                                    avgAge="23.9"
                                    market="€ 1.07B"
                                />
                            </Sidebar>
                        </div>
                    </div>
                </div>
                <hr className="mb-0" />
                <div className="container-fluid container-xl">
                    <div className="nav-overview">
                        <ul className="nav">
                            {
                                navi.map((slg, index) => (
                                    <li className="nav-item" key={index.toString()}>
                                        {/* <Link
                                            href={`/clubs/[league]/[name]/${pageTitle}`}
                                            as={`/clubs/${league}/${teamName}/${slg.toLowerCase()}`}
                                        > */}
                                            <a 
                                                href={`/clubs/${league}/${teamName}/${slg.toLowerCase()}/${idd}`} 
                                                className={`nav-link ${slg.toLowerCase() === newsitem ? "active" : ""}`}
                                            >
                                                {}
                                                {slg}
                                            </a>
                                        {/* </Link> */}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </ClubNavStyle>

    );
};


ClubNav.propTypes = {
    // children: PropTypes.node.isRequired,
};
ClubNav.defaultProps = {}

export default ClubNav;
