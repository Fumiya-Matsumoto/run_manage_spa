FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "test#{n}@example.com" }
    password { "password" }
    password_confirmation { "password" }
    name {"陸上太郎"}
    age {"25"}
    sex {"1"}
    height {"170"}
    weight {"60.5"}
  end
end
