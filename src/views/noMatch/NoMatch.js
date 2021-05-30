import {useLocation} from 'react-router-dom'
function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
          <br/>
          <a href="/">Go to Home Page</a>
        </h3>
      </div>
    );
  }

  export default NoMatch