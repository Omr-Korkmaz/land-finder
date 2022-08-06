import React from 'react'
import './enrollmentWidget.scss'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AddBoxIcon from '@mui/icons-material/AddBox';

const EnrollmentWidget = () => {
  return (
    <div className='widget'>

<h3 className='widget__title'>Enrolments Totals</h3>
<hr />
<div className='widget__info'>
<h4>Total</h4>
<h4>150</h4>
</div>

<hr />
<div className='widget__info__detail'>

<div>
  <div>
  <AutorenewIcon /> 
  <p> new</p>
  </div>

<p>100</p>
</div>
<div>
<div>

<AddBoxIcon  />
<p>renewed</p>
</div>
<p>100</p>
</div>

</div>



    </div>
  )
}

export default EnrollmentWidget