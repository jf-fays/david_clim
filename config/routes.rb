Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get "contact", to: "pages#contact_form"
  get "installation-climatisation", to: "pages#installation"
  get "maintenance-nettoyage-climatisation", to: "pages#maintenance_nettoyage"
  get "depannage-climatisation", to: "pages#depannage"
  get "climatisation-reversible-pompe-a-chaleur", to: "pages#clim_pompe_a_chaleur"
  get "realisation-climatisation", to: "pages#realisation"


  resources :contacts, only: [:new, :create ]
    # get '/contacts', to: 'contacts#new'
    # get 'contacts/sent'
end
