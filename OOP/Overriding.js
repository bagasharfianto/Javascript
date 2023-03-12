class MailService{
  constructor(sender) {
    this.sender = sender;
  }
}

class WhatsAppService extends MailService{
  constructor(sender, isBusiness) {
    super(sender);

    this.isBusiness = isBusiness;
  }
}