Rails.application.routes.draw do
  namespace:api do
    namespace:v1 do
      resources :predictions
      resources :users
      resources :homes
    end
  end
end
