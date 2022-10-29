import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import metamask from '../../images/metamask.svg';

import './header.css';

export default function Header(props) {
  return (
    <nav className="nav-bar">
      <header className="container header">
        <Link to="/" className="nav-name">
          NFTLock
        </Link>
        <nav className="main-nav">
          <ul className=" main-nav-list">
            <li>
              <Link to="/lock-NFT" className="btn main-nav-link nav--protect ">
                Lock NFTs
              </Link>
            </li>

            <li>
              {/* not connected */}
              {!props.connectState && (
                <button className="metamask-box" onClick={props.connectWallet}>
                  <svg
                    className="metamask-icon metamask-icon-grey"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 2.50064L1.07368 0L6.56842 1.97205H11.3895L16.9263 0L18 2.50064L16.6316 8.05083L17.8316 11.69L16.6316 15.4917L12.7579 14.3939L10.3579 16H7.68421L5.24211 14.3939L1.36842 15.4917L0.147368 11.69L1.38947 7.88818L0 2.50064ZM1.45258 0.650711L0.610474 2.76507L1.87363 7.50205L5.34732 6.62784L7.68416 4.71678L1.45258 0.650711ZM16.4631 0.650711L10.3368 4.71678L12.5684 6.62784L16.1263 7.50205L17.3684 2.76507L16.4631 0.650711ZM5.70521 10.1043L6.96837 9.37244L7.68416 10.7142L5.70521 10.1043ZM11.0105 9.37244L10.3368 10.7142C10.8842 10.5109 12.0168 10.1043 12.1684 10.1043C12.3199 10.1043 11.4596 9.6164 11.0105 9.37244ZM7.51574 14.3737L7.68416 13.3572L7.95784 13.0522H9.91574L10.3368 13.3572L10.4842 14.3737H7.51574Z"
                      fill="#175b59"
                    />
                  </svg>
                </button>
              )}

              {/* connect */}
              {props.connectState && (
                <div>
                  <button className="metamask-box metamask-box-green ">
                    <svg
                      className="metamask-icon"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="metamask-icon-green"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 2.50064L1.07368 0L6.56842 1.97205H11.3895L16.9263 0L18 2.50064L16.6316 8.05083L17.8316 11.69L16.6316 15.4917L12.7579 14.3939L10.3579 16H7.68421L5.24211 14.3939L1.36842 15.4917L0.147368 11.69L1.38947 7.88818L0 2.50064ZM1.45258 0.650711L0.610474 2.76507L1.87363 7.50205L5.34732 6.62784L7.68416 4.71678L1.45258 0.650711ZM16.4631 0.650711L10.3368 4.71678L12.5684 6.62784L16.1263 7.50205L17.3684 2.76507L16.4631 0.650711ZM5.70521 10.1043L6.96837 9.37244L7.68416 10.7142L5.70521 10.1043ZM11.0105 9.37244L10.3368 10.7142C10.8842 10.5109 12.0168 10.1043 12.1684 10.1043C12.3199 10.1043 11.4596 9.6164 11.0105 9.37244ZM7.51574 14.3737L7.68416 13.3572L7.95784 13.0522H9.91574L10.3368 13.3572L10.4842 14.3737H7.51574Z"
                        fill="#175b59"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}
