import Email from "../interfaces/Email";
import HttpResponse from "../Common/HttpResponse";

export const registerEmail = async (email: Email): Promise<HttpResponse> => {
  const response = await fetch("/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Address: email.address }),
  });

  const responseJson = await response.json();

  return {
    statusCode: response.status,
    message: responseJson.message,
  }
};