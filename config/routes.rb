Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.
  namespace :api do
    get "properties", to: "properties#index"
    get "cities/:city", to: "properties#city"

    get "distinct_cities", to: "properties#distinct_cities"
    resources :agents, only: [:index, :show]
    get "buyers/:id", to: "buyers#show"
    get "city_cost", to: "properties#cost_by_city"
    # get "agents", to: "agents#index"

    #TODO:: route to get distinct cites
  end
end
