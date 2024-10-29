import { allCustomers } from '../client/fetch.customers.js'; // Import your customer fetching function

export const post = async (_request, response) => {
  try {
    const limitedCustomersObject = await allCustomers(); // Fetch customer details
    logger.info(`There are ${limitedCustomersObject.total} customers!`);

    response.status(200).send(limitedCustomersObject); // Return customer details
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    throw new CustomError(
      500,
      `Internal Server Error - Error retrieving all customers from the commercetools SDK`
    );
  }
};
