class Contact < MailForm::Base
  # attribute :first_name, validate: true, length: { minimum: 2 }
  attribute :last_name, validate: true, length: { minimum: 2 }
  attribute :phone_number, validate: /\A\+?[0-9]{1,15}\z/m
  attribute :city, validate: true
  attribute :email, validate: /\A[^@\s]+@[^@\s]+\z/i
  attribute :message, validate: true, length: { minimum: 2 }
  attribute :nickname, captcha: true

  def headers
    { subject: "Formulaire de contact",
      to: Rails.application.credentials.dig(:gmail_smtp, :email_receiver),
      from: %("#{last_name}" <#{email}>) }
  end
end
