Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.
  namespace :api do
    get "properties", to: "properties#index"
  end
end
