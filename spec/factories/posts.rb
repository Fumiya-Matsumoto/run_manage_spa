FactoryBot.define do
  factory :post do
    practice_day {"2021-05-23 19:00"}
    practice_timezone { "0" }
    kind_of_practice {"0"}
    weather {"0"}
    place {"0"}
    content {"テスト"}
    strength {"1"}
    warming_up_distance {"1"}
    cooling_down_distance {"1"}
    association :user
  end
end
