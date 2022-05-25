class Post < ActiveRecord::Base
    belongs_to :user
    has_many :post_records, dependent: :destroy
    accepts_nested_attributes_for :post_records, allow_destroy: true

    # validates :user_id, {presence:true}

    # instance method
    def distance
        return self.post_records.sum(:distance) + self.warming_up_distance.to_f + self.cooling_down_distance.to_f
    end

    def num_main_record
        return self.post_records.where(record_type: 0).count
    end
    def main_distance
        return self.post_records.where(record_type: 0).sum(:distance)
    end
    def main_pace
        pace = 0
        self.post_records.where(record_type: 0).each do |record|
            pace += record.calculate_pace
        end
        return pace / self.post_records.where(record_type: 0).count
    end

    def num_recovery_record
        return self.post_records.where(record_type: 1).count
    end
    def recovery_distance
        return self.post_records.where(record_type: 1).sum(:distance)
    end
    def recovery_pace
        pace = 0
        self.post_records.where(record_type: 1).each do |record|
            pace += record.calculate_pace
        end
        return pace / self.post_records.where(record_type: 1).count
    end
    
end