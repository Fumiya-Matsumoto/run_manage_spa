class Post < ActiveRecord::Base
    belongs_to :user
    has_many :post_records, dependent: :destroy
    accepts_nested_attributes_for :post_records, allow_destroy: true

    # validates :user_id, {presence:true}
end