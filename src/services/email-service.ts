import Email from "../interfaces/Email";

export const registerEmail = async (email: Email) => {
  const response = await fetch("/api/register-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailAdress: email.address }),
  });

  const data = await response.json();
  return data;
};

export const verifyIfEmailIsRegistered = async (email: Email) => {
  const response = await fetch("/api/verify-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailAdress: email.address }),
  });

  const data = await response.json();
  return data;
}