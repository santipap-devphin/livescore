import React from 'react';
import PropTypes from 'prop-types';
import {ContentFooterPostStyle} from "./style"
import Link from 'next/link'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ContentFooterPost = ({ linkNext, linkPrev}) => {

  
  return (
    <ContentFooterPostStyle className="post-next-prev d-flex align-items-center mb-3 mt-4 flex-column flex-md-row">
      <div className="post-prev-post mr-md-auto mb-3 mb-md-0">
        <div className={`post-next-prev-content rounded-pill ${linkPrev !== "" ? "" : "disabled"}`}>
          {/* <span>Previous article</span> */}
            <Link
              href={`/highlight/[post]`}
              as={linkPrev}
            >
              <a 
                  href={linkPrev} 
                  className=""
                
                
              >
                <RiArrowLeftSLine className="mr-2" /> Prev Hightlight
              </a>
            </Link>
        </div>
      </div>

      <div className="post-next-post mb-3 mb-md-0">
        <div className="post-next-prev-content rounded-pill">
          {/* <span>Next article</span> */}
             <a 
                  href={`/highlight/`} 
                  className=""
                  
              >
               กลับหน้าหลัก 
              </a>
            
        </div>
      </div>

      <div className="post-next-post mb-3 mb-md-0">
        <div className={`post-next-prev-content rounded-pill ${linkNext !== "" ? "" : "disabled"}`}>
          {/* <span>Next article</span> */}
          <Link
              href={`/highlight/[post]`}
              as={linkNext}
            >
              <a 
                  href={linkNext} 
                  className=""
                 
                
              >
                Next Hightlight <RiArrowRightSLine className="ml-2" />
              </a>
            </Link>
        </div>
      </div>
    </ContentFooterPostStyle>
  );
};


ContentFooterPost.propTypes = {
  linkNext: PropTypes.string,
  linkPrev: PropTypes.string

};


export default ContentFooterPost;
