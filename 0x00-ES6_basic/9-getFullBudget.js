// Import the getBudgetObject function from another module
import getBudgetObject from './7-getBudgetObject';

// Export a function named getFullBudgetObject as the default export
export default function getFullBudgetObject(income, gdp, capita) {
  // Call getBudgetObject with the provided income, gdp, and capita, and store the result in the budget variable
  const budget = getBudgetObject(income, gdp, capita);
  
  // Create a new object fullBudget by spreading the properties of the budget object and adding two new methods
  const fullBudget = {
    ...budget, // Spread operator to include all properties of the budget object
    getIncomeInDollars(income) {
      // Method to format the income in dollars
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      // Method to format the income in euros
      return `${income} euros`;
    },
  };

  // Return the fullBudget object
  return fullBudget;
}

