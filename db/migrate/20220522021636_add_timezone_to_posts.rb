class AddTimezoneToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :practice_timezone, :integer
  end
end
