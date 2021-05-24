Rails.application.routes.draw do
  post '/remove-plant', to: 'planteds#remove_plant'
  resources :planteds
  resources :beds
  resources :plants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
