import {useState ,useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from './Accordion.module.css'

const Accordion = ({children}) => {

    console.log(children)
    const[activetab, setActivetab] = useState(children[0].props.label);
    const[label ,Setlable] = useState();
    const router = useRouter();
    const handleClick = ( e, newActiveTab) => {

        e.preventDefault();
        setActivetab(newActiveTab);

    }

    return (
        <div>
            
               {children.map((tab,num) => {
                     
                     const label = tab.props.label;
                     const texts = tab.props.text;

                     return(

                        <div key={tab.props.label} style={{marginTop:10}}>
                            <button className={`${label === activetab ? styles.current : ""} ${styles.accordion} ${styles.headerbtn} `}   onClick={(e) =>  handleClick(e , label)} key={label}> {texts}</button>
                        
                            <div className={`${label === activetab ? styles.active : styles.panel}`}>
                                        {tab.props.children}
                            </div>

                        </div>

                   )})}
        </div>
    )
}

export {Accordion};
