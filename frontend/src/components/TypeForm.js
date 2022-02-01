import {useState, React} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";
import _uniqueId from 'lodash/uniqueId';

//Simple styling 
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  root: {
    "& > *": {
      margin: "5rem auto 5rem",
      maxWidth: "60%"
    }
  }

})

export default function TypeForm(props) {
  const classes = useStyles();

  //Diffrent types of required data 
  const[name, setName] = useState('') 
  const[email, setEmail] = useState('')
  const [VC, setVC] = useState('')
  const [size, setSize] = useState(0)

  //Used for error messages
  const[nameError, setNameError] = useState(false)
  const[emailError, setEmailError] = useState(false)
  const[VCError, setVCError] = useState(false)
  const[sizeError, setSizeError] = useState(false)

  //Submit function
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)
    setEmailError(false)
    setVCError(false)
    setSizeError(false)

    //Creating error messages
    if(name == '') setNameError(true)   
    if(email == '') setEmailError(true)
    if(VC == '') setVCError (true)
    if(size == 0) setVCError (true)

    //posting payload to backend
    if (name && email && VC && size) {
      const user = {"name": name, "email": email, "version_control": VC, "team_size": size}

      const id = _uniqueId()      

      axios
      .put(`http://localhost:8000/api/users/${id}/`, user)
      .then(function(response){
        console.log(response);
      })
    }
  }

  //TypeForm asking users for information
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e => setName(e.target.value))}
          error={nameError}
          id = "standard-error"
          helperText="Must be filled"
          fullWidth label= "Full Name"
          required
        />
        <TextField
          className={classes.field}
          onChange={(e => setEmail(e.target.value))}
          error={emailError}
          id = "standard-error"
          helperText="Must be filled"
          fullWidth label= "Email"
          required
        />
        <TextField
          className={classes.field}
          onChange={(e => setVC(e.target.value))}
          error={VCError}
          id = "standard-error"
          helperText="Must be filled"
          fullWidth label= "Favourite Source Control Tool"
          required
        />
        <TextField
          className={classes.field}
          onChange={(e => setSize(e.target.value))}
          error={sizeError}
          id = "standard-error"
          helperText="Must be filled"
          fullWidth label= "Number of people on your team"
          required
        />
        <Button
          type="submit" 
          variant="contained">
          Submit
        </Button>
      </form>
  );
}
   
// import React, { useState } from 'react'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import Container from '@material-ui/core/Container'
// import { makeStyles } from '@material-ui/core'
// import TextField from '@material-ui/core/TextField'

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: 'block'
//   }
// })

// export default function TypeForm() {
//   const classes = useStyles()
//   const [title, setTitle] = useState('')
//   const [details, setDetails] = useState('')
//   const [titleError, setTitleError] = useState(false)
//   const [detailsError, setDetailsError] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setTitleError(false)
//     setDetailsError(false)

//     if (title == '') {
//       setTitleError(true)
//     }
//     if (details == '') {
//       setDetailsError(true)
//     }
//     if (title && details) {
//       console.log(title, details)
//     } 
//   }

//   return (
//     <Container size="sm">
//       <Typography
//         variant="h6" 
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//       >
//         Create a New Note
//       </Typography>
      
//       <form noValidate autoComplete="off" onSubmit={handleSubmit}>
//         <TextField className={classes.field}
//           onChange={(e) => setTitle(e.target.value)}
//           label="Note Title" 
//           variant="outlined" 
//           color="secondary" 
//           fullWidth
//           required
//           error={titleError}
//         />
//         <TextField className={classes.field}
//           onChange={(e) => setDetails(e.target.value)}
//           label="Details"
//           variant="outlined"
//           color="secondary"
//           multiline
//           rows={4}
//           fullWidth
//           required
//           error={detailsError}
//         />

//         <Button
//           type="submit" 
//           color="secondary" 
//           variant="contained">
//           Submit
//         </Button>
//       </form>

      
//     </Container>
//   )
// }