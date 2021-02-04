import React from 'react';
import PropTypes from 'prop-types';
import useCopyToClipboard from "../copyCodeToClipboard"
import { AiOutlineCheck, AiOutlineCopy } from "react-icons/ai";
import Button from "../../commons/Button"

const CopyButton = ({ code }) => {
  const [isCopied, handleCopy] = useCopyToClipboard(3000);

  return (
    <>
    <button type="button" className="position-absolute right btn btn-copy border bg-dark" onClick={() => handleCopy(code)}>
      {
      isCopied 
      ? <AiOutlineCheck className="text-white" /> 
      : <AiOutlineCopy className="text-white" />
      }
    </button>
    <style jsx>{`
        button.btn.btn-copy {
            position: absolute;
            right: 15px;
        }
    `}</style>
    </>
  );
};


CopyButton.propTypes = {
  className: PropTypes.string
};


export default CopyButton;
