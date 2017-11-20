import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";

const uri = "http://159.203.96.223/graphql"; // Fake graphql api
const httpLink = createHttpLink({
  uri,
  fetch
});

const errorAfterware = onError(({ networkError, operation, response }) => {
  console.log(
    "\nonError afterware logs : ",
    "\n\nNetwork error : ",
    networkError,
    "\nOperation : ",
    operation,
    "\nResponse : ",
    response
  );
});

export const link = errorAfterware.concat(httpLink);
