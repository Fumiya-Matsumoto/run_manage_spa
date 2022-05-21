class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.datetime :practice_day, null: false
      t.integer :weather
      t.integer :place
      t.integer :kind_of_practice, null: false
      t.text :content
      t.integer :strength
      t.integer :num_main
      t.integer :num_recovery
      t.float :time_main
      t.float :time_recovery
      t.float :pace_main
      t.float :pace_recovery
      t.timestamps
    end
  end
end
