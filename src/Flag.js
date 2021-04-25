import React from 'react'

const Flag = porps => {
        
        switch(porps.nationalityCode) {
  
          case "ar":   return <i className="ar flag"></i>;
          case "al":   return <i className="al flag"></i>;
          case "br":   return <i className="br flag"></i>;
          default:      return <i className="ar flag"></i>
        }
};

export default Flag;