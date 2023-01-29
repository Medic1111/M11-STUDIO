const welcome = `<h1 style="color:tomato; text-align:center">Welcome to M-11</h1>
  <p style="text-align:center">We are stoked to have you!</p>`;

const confirmation = (paymentId) => {
  return `<h1 style="color:tomato; text-align:center">Your order has been placed!</h1>
 <p style="text-align:center">Congrats on your new piece of art! 
 We only promote art that counts as assets to our customers. If you are not 100% satisfied, please contact our services 888-FAKE-NUMB</p>
 <p style="text-align:center">CONFIRMATION:
  <span style="color:tomato;">${paymentId}</span></p>`;
};

module.exports = { welcome, confirmation };
