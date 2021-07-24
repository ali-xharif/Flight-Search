import logo from './logo.svg';
import './App.css';
import Places from './components/Places';
import Dates from './components/Dates';


function App() {
  return (
    <div className="App">
    
      <div className="book-flight-widget">
        <h3>Book your next flight</h3>
        <form>
          <div className="form-group">
            <label>From</label>
            <Places />
          </div>
          <div className="form-group">
            <label>To</label>
            <Places />
          </div>
          <div className="form-group left">
            <label>Departure on or after</label>
            <Dates />
          </div>
          <div className="form-group right">
            <label>Return date</label>
            <input type="date" name="" />
          </div>
          <input type="submit" value="Search" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default App;
