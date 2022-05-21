Rails.application.routes.draw do
  namespace :v1 do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :users do
      resources :posts do
        resources :post_records
      end
      resources :best_times
      resources :objective
    end
  end
end
