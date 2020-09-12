import React from 'react';



function App() {
  return (
    <div className="App">
        <label for="loan_size">Loan Size</label> 
        <input type="text" name="loan_size" id="loan_size" />

        <label for="credit_score">Credit Score</label> 
        <input type="text" name="credit_score" id="credit_score" />

        <label for="prop_type">Property Type </label>
        <select name="prop_type" id="prop_type">
          <option value="single_family">Single Family</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="multi_family">Multi-Family</option>
        </select>

        <label for="occupancy">Occupancy </label>
        <select name="occupancy" id="occupancy">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="investment">Investment</option>
        </select>

        <button id="quote_rates">Quote Rates</button>


       <table>
         <tr>
           <th>Lender</th>
           <th>Product</th>
           <th>Rate</th>
           <th>Closing Costs</th>
           <th>Monthly Payment</th>
         </tr>
         {/* where api calls are going to go */}
       </table>
    </div>
  );
}



export default App;
