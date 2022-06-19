Rails.application.routes.draw do
  namespace :v1 do
    resources :posts
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'v1/auth/registrations'
    }
    # namespace :auth do
    #   get 'sessions', to: "sessions#index"
    # end
    resources :users, only: [:index, :show] do
      get 'posts', to: "posts#user_index"
      member do
        get :following, :followers
      end
      resources :best_times
      resources :objective
    end
    resources :relationships, only: [:create, :destroy]
  end
end
