// import React, { useState } from 'react'
// import Autocomplete from 'react-autocomplete'
  
// function Auto() {

//     const [value, setValue] = useState('');
  
//     return (
//         <div style={{
//             display: 'flex', flexDirection: 'column',
//             alignItems: 'center'
//         }}>
//             <div>
//                 <Autocomplete fullWidth
//                     items={[
//                         { label: 'C++' },
//                         { label: 'C' },
//                         { label: 'Python' },
//                         { label: 'JavaScript' },
//                         { label: 'Julia' },
//                         { label: 'Java' },
//                         { label: 'Objective C' },
//                         { label: 'C#' },
//                         { label: 'Dart' },
//                         { label: 'Perl' }
//                     ]}
  
//                     shouldItemRender={(item, value
//                         ) => item.label.toLowerCase()
//                         .indexOf(value.toLowerCase()) > -1}
//                     getItemValue={item => item.label}
//                     renderItem={(item, isHighlighted) =>
//                         <div style={{
//                             background: isHighlighted ?
//                                 '#bcf5bc' : 'white'
//                         }}
//                             key={item.id}>
//                             {item.label}
//                         </div>
//                     }
//                     value={value}

//                     onChange={e => setValue(e.target.value)}

//                     onSelect={(val) => setValue(val)}
  
//                     inputProps={{
//                         style: {
//                             width: '300px', height: '20px',
//                             background: '#e4f3f7', 
//                             border: '2px outset lightgray'
//                         },
//                         placeholder: 'Search language'
//                     }}
//                 />
//             </div>
//         </div>
//     );
// }
  
// export default Auto;