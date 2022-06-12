Rails.application.routes.draw do
  namespace :v1 do
    resources :posts
    mount_devise_token_auth_for 'User', at: 'auth'
    namespace :auth do
      get 'sessions', to: "sessions#index"
    end
    resources :users do
      get 'posts', to: "posts#user_index"
      resources :best_times
      resources :objective
    end
  end
end
