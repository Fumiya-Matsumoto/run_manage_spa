if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_auth-app-api', domain: 'example.com'
else
    Rails.application.config.session_store :cookie_store, key: '_auth-app-api'
end