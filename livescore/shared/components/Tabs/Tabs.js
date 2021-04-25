import React from 'react';
import {useState ,useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from './Tabs.module.css'
import {slugify} from '../../utils/slugify'
import PropTypes from 'prop-types';

const Tabs = ({children /* initialTab*/}) => {

   
    const[activetab, setActivetab] = useState(children[0].props.label);
    const[label ,Setlable] = useState();
    const router = useRouter();
    const handleClick = ( e, newActiveTab) => {

        e.preventDefault();
        setActivetab(slugify(newActiveTab));

    }

     /*useEffect(() => {
         if(initialTab.tab){

            setActivetab(initialTab.tab);
            console.log("inin "+initialTab.tab)
         }
     },[])*/


    useEffect(() => {
        //console.log(activetab)
        //effect
        router.push(`${router.pathname}?tab=${slugify(activetab)}`,undefined,{shallow:true})

    }, [activetab])

    return (
        <div>
            <ul className={styles.tabs}>

                 {children.map((tab) => {
                     
                     const label = tab.props.label;
                     const texts = tab.props.texts;
                    //console.log(tab)
                     //console.log(slugify(label) +"==="+ activetab)
                     
                     return(
                         <li 
                            className={slugify(label) === activetab ? styles.current : ""}  
                            key={label}
                        > 
                       
                         {label === "premier" ?   
                            <img 
                            width="20"
                            src="../assets/country/7score_icon_pre.png"
                            alt="icon premier"/>
                            :
                            label === "la-liga" ? 
                            <img 
                            width="20"
                            src="../assets/country/7score_icon_la_liga.png"
                            alt="icon la-liga"/>
                            :
                            label === "seria-a" ? 
                            <img 
                            width="20"
                            src="../assets/country/7score_icon_serie_a.png"
                            alt="icon seria-a"/>
                            :
                            label === "bundes" ? 
                            <img 
                            width="20"
                            src="../assets/country/7score_icon_bundes.png"
                            alt="icon la-liga"/>
                            : 
                            label === "france" ? 
                            <img 
                            width="20"
                            src="../assets/country/7score_icon_france.png"
                            alt="icon la-liga"/>
                            : 
                            label === "j-league" ? 
                            <img 
                            width="20"
                            src="../assets/country/7score_icon_japan.png"
                            alt="icon la-liga"/>
                            : 
                            label === "thai-league" ? 
                            <img 
                            width="20"
                            src="../assets/country/Thailand.png"
                            alt="icon thailand"/>
                            : 
                            null
                            }
                        <a href="#" onClick={(e) =>  handleClick(e , label)} style={{fontSize:16}}>{texts}</a>
                        </li>

                        )
                        }
                        )}
                
                
            </ul>
           
                {children.map((one) => (

                             (slugify(one.props.label) === activetab) ?
                                <div key={one.props.label} className={styles.content}>
                                    {one.props.children}
                                </div>
                            : ""

                ))}
                
            
        </div>
    )
}

export default Tabs;