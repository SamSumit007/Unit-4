const transporter = require("./configs/mail");
const sendMail = async ({ from, to, subject, text, html }) => {
  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
};

const confirmationMail = async ({ from, to, user }) => {
  await transporter.sendMail({
    from,
    to,
    subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
    text: `Hi ${user.first_name}, Please confirm your email address`,
    html: `<h1>Hi ${user.first_name}, Please confirm your email address</h1>`,
  });
};
const adminMail = async ({ from, user }) => {
  await transporter.sendMail({
    from,
    to: "admin1@gmail.com,admin2@gmail.com,admin3@gmail.com,admin4@gmail.com,admin5@gmail.com",
    subject: `${user.first_name} ${user.last_name} has registered with us`,
    text: `Please welcome ${user.first_name} ${user.last_name}`,
    html: `<h1>Please welcome ${user.first_name} ${user.last_name}</h1>`,
  });
};
module.exports = { sendMail, adminMail, confirmationMail };
