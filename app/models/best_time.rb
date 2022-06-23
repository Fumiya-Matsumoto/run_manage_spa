class BestTime < ApplicationRecord
    belongs_to :user
    validates :user_id, uniqueness: { scope: [:distance, :official]}
end