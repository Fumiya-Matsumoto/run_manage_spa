class AddDistancesToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :distance, :float
    add_column :posts, :warming_up_distance, :float
    add_column :posts, :cooling_down_distance, :float
  end
end
