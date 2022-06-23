class AddColumnsBestTimes < ActiveRecord::Migration[6.1]
  def change
    add_column :best_times, :date, :datetime
    add_column :best_times, :event, :string
    add_column :best_times, :official, :integer
  end
end
