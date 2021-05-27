import React from 'react';
import {useState ,useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from './TabsOverviews.module.css'
import {slugify} from '../../utils/slugify'
import PropTypes from 'prop-types';


const TabsOverviews = ({title,children}) => {

    //console.log(children)
    const[activetab, setActivetab] = useState(children[0].props.label);
    const[label ,Setlable] = useState();
    const router = useRouter();
    const handleClick = ( e, newActiveTab) => {

        e.preventDefault();
        setActivetab(slugify(newActiveTab));

    }

    /* useEffect(() => {
         if(initialTab.tab){

            setActivetab(initialTab.tab);
            console.log("inin "+initialTab.tab)
         }
     },[])*/


    useEffect(() => {
        //effect
        return () => {

            //console.log(title)
            //router.push(`${router.pathname}?tab=${slugify(activetab)}`,undefined,{shallow:true})
            //cleanup
            //console.log(activetab)
        }
    }, [activetab])

    return (
        <div className="tabscon container max-width-md">
            <ul className={styles.tabs}>

                 {children.map((tab) => {
                     
                     const label = tab.props.label;
                     const texts = tab.props.texts;
                   // console.log(slugify(label) +"==="+ activetab)
                     return(

                        <li 
                            className={slugify(label) === activetab ? styles.current : ""}  
                            key={label}
                        >
                            <a href="#" onClick={(e) =>  handleClick(e , label)}>{texts}</a>
                        </li>

                        )})}
                
                
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

export default TabsOverviews;
