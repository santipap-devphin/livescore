import styled from "styled-components";

export const CardSoccerStyle = styled.div`

.table-wrapper{
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table td, .fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  border-right: 1px solid #f8f8f8;
  font-size: 16px;
  color:#000;
}

.fl-table thead th {
  color: #ffffff;
  background: linear-gradient( 0deg, #710000 0%, #af0000 100%);
}


.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #324960;
}

.fl-table tr:nth-child(even) {
  background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
  
  .fl-table {
      display: block;
      width: 100%;
  }
  .table-wrapper:before{
      content: "Scroll horizontally >";
      display: block;
      text-align: right;
      font-size: 11px;
      color: white;
      padding: 0 0 10px;
  }
  .fl-table thead, .fl-table tbody, .fl-table thead th {
      display: block;
  }
  .fl-table thead th:last-child{
      border-bottom: none;
  }
  .fl-table thead {
      float: left;
  }
  .fl-table tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
  }
  .fl-table td, .fl-table th {
      padding: 20px .625em .625em .625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 16px;
      text-overflow: ellipsis;
  }
  .fl-table thead th {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
  }
  .fl-table tbody tr {
      display: table-cell;
  }
  .fl-table tbody tr:nth-child(odd) {
      background: none;
  }
  .fl-table tr:nth-child(even) {
      background: transparent;
  }
  .fl-table tr td:nth-child(odd) {
      background: #F8F8F8;
      border-right: 1px solid #E6E4E4;
  }
  .fl-table tr td:nth-child(even) {
      border-right: 1px solid #E6E4E4;
  }
  .fl-table tbody td {
      display: block;
      text-align: center;
  }
  
}
  .soccer__content {
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: none!important;
  }
  .sr-bb .srt-base-1 {
    background-color: #fff;
    color: rgba(0,0,0,.82);
    border-color: rgba(0,0,0,.12);
    color: ${({ theme }) => theme.colors.light};
  }
  .pitch-soccer__container {
    /* padding-bottom: 61.97183%; */
    background-color: #5c8301;
    position: relative;
    overflow: hidden;
    z-index: 0;
    .pitch-soccer__spotlight {
      position: absolute;
      &.soccer-corner {
        background: -webkit-radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.12) 0 transparent 75%);
        background: radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.12) 0,transparent 75%);
        width: 15%;
        height: 15%;
      }
      &.soccer-center {
        left: 50%;
        top: 50%;
        width: 33%;
        height: 66%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        background: -webkit-radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.1) 0,transparent 75%);
        background: radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.1) 0,transparent 75%);
      }
      &.corner-top {
        top: -5%;
      }
      &.corner-left {
        left: -5%;
      }
      &.corner-right {
        right: -5%;
      }
      &.corner-bottom {
        bottom: -5%;
        &.corner-right {
          transform: rotate(45deg);
        }
      }
      &.corner-top {
        &.corner-left {
          transform: rotate(45deg);
        }
      }
    }
    .pitch-soccer__stripes {
      position: absolute;
      left: 6.7%;
      right: 1.7%;
      top: 3%;
      bottom: 3%;
      background-image: -webkit-linear-gradient(left,hsla(0,0%,100%,.08) 50%,transparent 0);
      background-image: linear-gradient(90deg,hsla(0,0%,100%,.08) 50%,transparent 0);
      background-size: 14.575% 1%;
    }
    .pitch-soccer__noise {
      background-image: url("/assets/bg/pattern_soccer.png");
      color: 'orange';
      font-size: 22px;
    }
    .pitch-soccer__svg-container {
      background-image: url("/assets/bg/Soccer_field_-_empty.svg");
    }
  }
  
`;