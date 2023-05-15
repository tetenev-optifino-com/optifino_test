import {Stepper} from './Stepper'
import {useParams, useNavigate} from 'react-router-dom'

export const Wizard = () => {

  /** State of the whole first set of 12 steps with useReducer */

  /** Main idea: we have just one root /wizard/:step with params as step names or ids, 
   and change only FormBodies depending on the number or name of the step
  */
  
   const {step} = useParams();
   const navigate = useNavigate();

  const handleBackClick = () => {
    const nextStep = Number(step) - 1;
    if (nextStep === 0) return;
    navigate(`/wizard/${nextStep}`);
  };

  const handleNextClick = () => {
    const nextStep = Number(step) + 1;
    if (nextStep === 4) return;
    navigate(`/wizard/${nextStep}`);
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)', outline: '1px solid green'}}>
      <Stepper>Stepper</Stepper>
      <div style={{ display: 'flex', alignItems: 'center', outline: '1px solid violet'}}>
        <button type='button' onClick={handleBackClick} style={{cursor: 'pointer'}}>Back</button>
        <p>Let's get acquainted</p>
      </div>
      <form action="">
        {stepToFormBody[step]({value: `Step number ${step}`})}
      </form>
      <footer style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', outline: '1px solid black', marginTop: 'auto'}}>
        <p>Need help?</p>
        <button type='button' onClick={handleNextClick} style={{cursor: 'pointer'}}>Next</button>
      </footer>
    </main>
  )
}

const stepToFormBody = {
  '1': (props) => <FormBody1 {...props}/>,
  '2': (props) => <FormBody2 {...props}/>,
  '3': (props) => <FormBody3 {...props}/>,
}

const FormBody1 = ({value}) => {
  return (
    <label >
      <label htmlFor="">FormBody1</label>
      <input type="text" value={value}/>
    </label>
  )
}

const FormBody2 = ({value}) => {
  return (
    <label>
      <label htmlFor="">
        FormBody2
        <input type="text" value={value}/>
      </label>
    </label>
  )
}

const FormBody3 = ({value}) => {
  return (
    <label>
      <label htmlFor="">
        FormBody3
        <input type="text" value={value}/>
      </label>
    </label>
  )
}