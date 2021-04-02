import React, { useState, forwardRef,useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Avatar from "../../commons/Avatar"
import { OverViewMatchesTableStyle } from "./style"
import DatePicker from "react-datepicker";

const OverViewMatchesTable = ({ className, plyers ,fixture }) => {
  
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    useEffect(() => {
       
      
         setloadDing(true)

        
      });
    const [startDate, setStartDate] = useState(new Date());
    const [nextDate, setNextDate] = useState(startDate);
    const [loadDing, setloadDing] = useState(true);
    const ref = React.createRef()
    const previousClick = ()=> {

        setloadDing(false)
        console.log('previous')
        startDate.setMonth(startDate.getMonth()-1);
       
        setStartDate(nextDate)
       
    }
    var list_fixture = [];
    const router = useRouter()

    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let spp;
    let sdate = startDate.toString().split(" ");
    let maptomonth = month.indexOf(sdate[1])+1;
    let nmonth = addZero(maptomonth);
   //console.log(router.query.name)
   // console.log(nmonth)
  
    //console.log(fixture)
   
    if(Array.isArray(fixture.results.tournament.week) === true){

            for(var i = 0; i< fixture.results.tournament.week.length; i++)
            {

                   if(Array.isArray(fixture.results.tournament.week[i].match) === true){

                    for(var j = 0; j< fixture.results.tournament.week[i].match.length; j++){

                        spp = fixture.results.tournament.week[i].match[j]["@date"].split(".");
                        
                        if(nmonth === spp[1]){

                            if(router.query.id === fixture.results.tournament.week[i].match[j].localteam["@id"]  || router.query.id === fixture.results.tournament.week[i].match[j].visitorteam["@id"]){

                                //console.log(fixture.results.tournament.week[i].match[j].localteam["@name"] +" vs "+fixture.results.tournament.week[i].match[j].visitorteam["@name"])

                                list_fixture.push(
                                    {
                                        date:fixture.results.tournament.week[i].match[j]["@date"],
                                        league:fixture.results.tournament["@league"],
                                        localteam:fixture.results.tournament.week[i].match[j].localteam["@name"],
                                        localteamft_score:fixture.results.tournament.week[i].match[j].localteam["@ft_score"],
                                        visitorteamft_score: fixture.results.tournament.week[i].match[j].visitorteam["@ft_score"],
                                        visitorteam:fixture.results.tournament.week[i].match[j].visitorteam["@name"]
                                      
                                    })

                            }

                           


                        }

                    }


                }
                
            }


    }else if(fixture.results["@country"] === "Netherlands"){


        if(Array.isArray(fixture.results.tournament.stage.week) === true){

            for(var i = 0; i< fixture.results.tournament.stage.week.length; i++)
            {

                   if(Array.isArray(fixture.results.tournament.stage.week[i].match) === true){

                    for(var j = 0; j< fixture.results.tournament.stage.week[i].match.length; j++){

                        spp = fixture.results.tournament.stage.week[i].match[j]["@date"].split(".");
                        
                        if(nmonth === spp[1]){

                            if(router.query.id === fixture.results.tournament.stage.week[i].match[j].localteam["@id"]  || router.query.id === fixture.results.tournament.stage.week[i].match[j].visitorteam["@id"]){

                                //console.log(fixture.results.tournament.week[i].match[j].localteam["@name"] +" vs "+fixture.results.tournament.week[i].match[j].visitorteam["@name"])

                                list_fixture.push(
                                    {
                                        date:fixture.results.tournament.stage.week[i].match[j]["@date"],
                                        league:fixture.results.tournament["@league"],
                                        localteam:fixture.results.tournament.stage.week[i].match[j].localteam["@name"],
                                        localteamft_score:fixture.results.tournament.stage.week[i].match[j].localteam["@ft_score"],
                                        visitorteamft_score: fixture.results.tournament.stage.week[i].match[j].visitorteam["@ft_score"],
                                        visitorteam:fixture.results.tournament.stage.week[i].match[j].visitorteam["@name"]
                                      
                                    })

                            }

                           


                        }

                    }


                }
                
            }


    }

        
    }

    
      list_fixture.sort(function(a, b) {
        //console.log(a["@minute"])
         return a["date"] - b["date"];
      });

    //console.log(list_fixture)
    
    //console.log(fixture.results.tournament.week)
    const oneventChange = (date) =>{

        setloadDing(false)
        /*var dt = new Date();
        var n = dt.getMonth()+1;
        var newdate = date.toString();
        var sp_date = newdate.split(" ");
        var mappingdate;

        if(month.indexOf(sp_date[1]) > -1)
        {  

           
            mappingdate = month.indexOf(sp_date[1])+1;


        }*/

        //console.log(mappingdate)
        //console.log("data "+ month[sp_date[1]])
        setStartDate(date)
        setloadDing(true)
        


     }
    
    const nextClick = ()=> {
        console.log('next')
       
        
      setloadDing(false)
      nextDate.setMonth(nextDate.getMonth()+1);
      setStartDate(nextDate)
        //setloadDing(true)
        
        
        //console.log(startDate+1)
    }
    const CustomInput = forwardRef(({ onClick, value }, ref) => (
        <button ref={ref} className="btn btn-link text-white border-0 text-decoration-none" onClick={onClick}>
        {value}
        </button>
    ))

    return (
        <OverViewMatchesTableStyle className={`table-responsive mb-3 ${className}`}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="4">
                            <span>นัดที่เตะ</span>

                            <DatePicker
                                className="ml-2"
                                selected={startDate}
                                onChange={oneventChange}
                                dateFormat="( MMM yyyy ▾ )"
                                showMonthYearPicker
                                showFullMonthYearPicker
                                customInput={<CustomInput ref={ref} />}
                            />
                        </th>
                        <th>
                            <button className='btn-click' onClick={previousClick}>Previous </button>
                            <span>| </span>
                            <button className='btn-click' onClick={nextClick}> Next</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {

                       (loadDing !== false) ?
                      
                       Array.isArray(list_fixture) ? 
                       list_fixture.map((play, index) => (
                               <tr key={index.toString()}>
                                    <td>{play["date"]}</td>
                                    <td>{play["league"]}</td>
                                    <td>
                                        <span>{play["localteam"]}</span>
                                      
                                    </td>
                                    <td>{play["localteamft_score"] === "" ? "?":play["localteamft_score"]} - {play["visitorteamft_score"] === "" ? "?":play["visitorteamft_score"]}</td>
                                    <td>
                                        
                                     <span>{play["visitorteam"]}</span>
                                    </td>
                                </tr>
                       )) 
                       : 
                       <>
                        <tr key={0}>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <span></span>
                                        
                                    </td>
                                    <td></td>
                                    <td>
                                     <span>Arsenal FC</span>
                                    </td>
                                </tr>
                       </>
                   :null}
                   
                </tbody>
            </table>
        </OverViewMatchesTableStyle>
    )
}

OverViewMatchesTable.propTypes = {
    className: PropTypes.string,
    plyers: PropTypes.array.isRequired,
    
}
OverViewMatchesTable.defaultProps = {
    className: "",
};

export default OverViewMatchesTable
