class CreateBestTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :best_times do |t|
      t.references :user, null: false, foreign_key: true
      t.float :time_800
      t.float :time_1000
      t.float :time_1500
      t.float :time_2000
      t.float :time_3000
      t.float :time_5000
      t.float :time_10000
      t.float :time_3000sc
      t.float :time_5k
      t.float :time_10k
      t.float :time_half
      t.float :time_marathon
      t.timestamps
    end
  end
end
