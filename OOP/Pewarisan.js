//Superclass
class MailService{
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

//mewariskan dari Superclass
class WhatsAppService extends MailService{
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

//subclass
class EmailService extends MailService{
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
// whatsapp.sendMessage('Hello', '+6289876543210');
// whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);

 
// email.sendMessage('Hello', 'john@doe.com');
// email.sendDelayedMessage('Hello', 'john@doe.com', 3000);

console.log(whatsapp instanceof WhatsAppService);
console.log(whatsapp instanceof EmailService);

