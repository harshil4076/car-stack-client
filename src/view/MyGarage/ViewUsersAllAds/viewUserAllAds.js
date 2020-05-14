import React from 'react';
import AdList from '../../../Components/AdList/AdList'
import { makeStyles, useTheme } from '@material-ui/core/styles';

export default function ManagAds (props){
  const {SetGarage} = props
  const manageDelete = (id) => {
    console.log(id)
  }
  const manageEdit = (data) => {

  }
return (
    <div>
        { 
          SetGarage.map((item, i) => (
            <AdList {...props} item={item} key={i} manageDelete={manageDelete} manageEdit={manageEdit} />
          ))
        }
    </div>
)
}