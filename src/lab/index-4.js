import React from 'react';
import ContactCard from './ContactCard';

function App(){
  return(
    <div>
      <ContactCard 
        contact={{ 
          name:"Mr Black", 
          imgUrl:"http://placekitten.com/g/300/200", 
          phone:"(+06) 31234444", 
          email:"mr.black@meow.com.my"}}
      />
      <ContactCard 
        contact={{ 
          name:"Mr Black", 
          imgUrl:"http://placekitten.com/g/300/200", 
          phone:"(+06) 31234444", 
          email:"mr.black@meow.com.my"}}
      />
      <ContactCard 
        contact={{ 
          name:"Mr Black", 
          imgUrl:"http://placekitten.com/g/300/200", 
          phone:"(+06) 31234444", 
          email:"mr.black@meow.com.my"}}
      />
      <ContactCard 
        contact={{ 
          name:"Mr Black", 
          imgUrl:"http://placekitten.com/g/300/200", 
          phone:"(+06) 31234444", 
          email:"mr.black@meow.com.my"}}
      />
    </div>
  )
}

export default App