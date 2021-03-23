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

                     //console.log(slugify(label) +"==="+ activetab)
                     
                     return(
                         

                        <li 
                            className={slugify(label) === activetab ? styles.current : ""}  
                            key={label}
                        >
                            <a href="#" onClick={(e) =>  handleClick(e , label)}>{label}</a>
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