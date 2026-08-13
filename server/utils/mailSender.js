const axios = require("axios")

const mailSender = async (email, title, body) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { email: process.env.MAIL_USER, name: "StudyNotion" },
        to: [{ email }],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    )

    return response.data
  } catch (error) {
    console.log(error.response?.data || error.message)
    return error.message
  }
}

module.exports = mailSender
