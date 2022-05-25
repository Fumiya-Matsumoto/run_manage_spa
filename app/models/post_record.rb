class PostRecord < ApplicationRecord
    belongs_to :post

    def calculate_pace
        pace = self.time / self.distance
        return pace
    end
end