import {useState ,useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from './TableOdds.module.css'

const TableOdds = ({children}) => {

    console.log(children)
   /* const[activetab, setActivetab] = useState(children[0].props.label);
    const[label ,Setlable] = useState();
    const router = useRouter();
    const handleClick = ( e, newActiveTab) => {

        e.preventDefault();
        setActivetab(newActiveTab);

    }*/

    return (
        <div>
            <table>
                <thead>
                <tr>
                 <th>ประเภท</th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/bet365.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/188bet.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/sbo.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/1xBet.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/Dafabet.png"} /></th>
                 </tr>
                </thead>
                <tbody>
                <tr>
                
                </tr>
                </tbody>

            </table>
               
       </div>
    )
}

export {TableOdds};



