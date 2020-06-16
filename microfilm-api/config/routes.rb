Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]

  post "login", to: "authentication#login"
end
