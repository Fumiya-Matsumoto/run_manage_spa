class ModifyBestTimes < ActiveRecord::Migration[6.1]
  def change
    remove_column :best_times, :time_800, :float
    remove_column :best_times, :time_1000, :float
    remove_column :best_times, :time_1500, :float
    remove_column :best_times, :time_2000, :float
    remove_column :best_times, :time_3000, :float
    remove_column :best_times, :time_5000, :float
    remove_column :best_times, :time_10000, :float
    remove_column :best_times, :time_3000sc, :float
    remove_column :best_times, :time_5k, :float
    remove_column :best_times, :time_10k, :float
    remove_column :best_times, :time_half, :float
    remove_column :best_times, :time_marathon, :float
    add_column :best_times, :best_time, :float
    add_column :best_times, :distance, :float
  end
end
