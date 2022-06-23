class AddUniqueToBestTimes < ActiveRecord::Migration[6.1]
  def change
    add_index :best_times, [:user_id, :distance, :official], :unique=>true
  end
end
