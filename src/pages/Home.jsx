import React from "react";
import Button from "../components/button";
import Footer from "../components/widgets/footer";
import Profile from "../components/profile";

const Home = () => {
  return (
    <div>
        <Profile/>
      <div>
        <Button link= "https://training.zuri.team/" content="Zuri Team"/>
      </div>
      <div>
        <Button link=' http://books.zuri.team 'content='Zuri Books'/>
      </div>
      <div>
        <Button link=' https://books.zuri.team/ 'content='Python Books'/>
      </div>
      <div>
        <Button link=' https://background.zuri.team 'content='Background Check For coders'/>
      </div>
      <div>
        <Button link=' https://books.zuri.team/design-rules 'content='Design Books'/>

        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;
