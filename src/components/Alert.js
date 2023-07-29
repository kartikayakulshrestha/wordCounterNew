import React, { memo } from 'react'

export default memo(function Alert(props) {
    
  
    return (props.alert && <div class={`alert alert-${(props.alert.type)} alert-dismissible fade show`} role="alert">
            
            <strong>{props.alert.msg}</strong> 
            
            </div>
    )
  
})
