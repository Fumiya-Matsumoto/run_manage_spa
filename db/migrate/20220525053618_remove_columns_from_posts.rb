class RemoveColumnsFromPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :num_main, :integer
    remove_column :posts, :num_recovery, :integer
    remove_column :posts, :time_main, :float
    remove_column :posts, :time_recovery, :float
    remove_column :posts, :pace_main, :float
    remove_column :posts, :pace_recovery, :float
    remove_column :posts, :distance, :float
  end
end
