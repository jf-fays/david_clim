Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "contact", to: "pages#contact_form"

  resources :contacts, only: [:new, :create ]
    get '/contacts', to: 'contacts#new'
    # get 'contacts/sent'
end
