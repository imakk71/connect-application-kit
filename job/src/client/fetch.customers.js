import { client } from '../commercetools/client.js'; // Adjust the import according to your setup

export const allCustomers = async () => {
  try {
    const response = await client.customers.fetch(); // Adjust the method based on your SDK
    return response.body; // Return the customer data
  } catch (error) {
    console.error(`Error fetching customers: ${error.message}`);
    throw new Error('Failed to fetch customer data');
  }
};
