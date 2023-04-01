import React from 'react';
import './LastComponent.css';

const LastComponent = () => {
    return (
        <div  className=' full mt-5 card m-5 '>
            <h3>Q\A Blog</h3>
 <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Explain props vs state.
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Both are used to manage data and to determine what should be rendered on the screen. 
      Props is used inside a child component. Props is passed from a parent component to a child component. It can be object or function  or anything. State is used to manage the internal state of a component.React allows components to manage their own state using the useState hook. State is a way for components to store data that can change over time. State is used to represent the current state of a component, and it determines what should be rendered on the screen 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How does useState work?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> The useState hook is used to add state to functional components. The useState hook takes an initial state value as its argument, and returns an array with two values: the current state value, and a function that can be used to update the state value. </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Purpose of useEffect other than fetching data.
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> useEffect is another hook used for handling side effects in functional components. The purposes of using useEffect other than fetching data are : Updating the document title, Animations, Managing network connections, Subscribing to events, Managing authentication and authorization.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      How Does React work?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">React uses a declarative syntax to describe the desired state of a component, and then updates the UI to reflect that state. React is a powerful library that allows developers to build complex UIs using a declarative syntax and a component-based architecture. By using a virtual DOM and performing efficient updates, React is able to provide a performant and responsive user interface. </div>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default LastComponent;