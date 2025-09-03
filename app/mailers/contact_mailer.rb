class ContactMailer < ApplicationMailer
  default from: Rails.application.credentials.dig(:gmail_smtp, :email_user)

  def new_contact(contact)
    @contact = contact
    mail(
      to: Rails.application.credentials.dig(:gmail_smtp, :email_receiver),
      subject: "📩 Nouveau message depuis David Clim"
    )
  end
end
