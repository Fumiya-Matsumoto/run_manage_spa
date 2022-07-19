Rails.application.routes.draw do
  namespace :v1 do
    resources :posts
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'v1/auth/registrations'
    }
    namespace :auth do
      resources :sessions, only: %i[index]
    end
    resources :users, only: [:index, :show] do
      get 'posts', to: "posts#user_index"
      member do
        get :following, :followers
      end
      resources :objective
    end
    resources :best_times
    resources :relationships, only: [:create, :destroy]
  end
end
