class ContactsController < ApplicationController
  require 'mail_form'
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contacts_params)
    @contact.request = request
    if @contact.deliver
      redirect_to new_contact_path, notice: "Message envoyé!"
    else
      flash.now[:alert] = "Un ou plusieurs champs contiennent une erreur. Veuillez vérifier et essayer à nouveau."
      render :new, status: :unprocessable_entity
    end
  end

  # def create
  #   @contact = Contact.new(contacts_params)
  #   @contact.request = request
  #   respond_to do |format|
  #     if @contact.deliver
  #       format.json { render json: { success: true } }
  #     else
  #       format.json { render json: { errors: @contact.errors.full_messages }, status: :unprocessable_entity }
  #     end
  #   end
  # end

  private

  def contacts_params
    params.require(:contact).permit(:last_name, :email, :city, :phone_number, :message)
  end
end
